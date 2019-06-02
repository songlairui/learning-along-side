<template>
    <div class="time-files">
        <h1>{{ date }}</h1>
        <div class="history-items">
            <div
                v-for="(item,idx) in historyItems"
                class="history-item"
                :class="{
                        group: cursors[idx] === '<>',
                        'group-end': cursors[idx] === '</>',
                        occupied: occupied[idx]
                    }"
            >
                <div class="group-title" v-if="cursors[idx] === '<>'">
                    <input
                        type="text"
                        :value="labels[idx]"
                        @input="inputTitle($event.target.value,idx)"
                    >
                </div>
                <div class="checkbox" :class="{pairing: idx === last}">
                    <input
                        type="checkbox"
                        @click="toggleOn($event, idx)"
                        :disabled="occupied[idx]"
                        :checked="!!cursors[idx] || idx === last"
                    >
                </div>
                <div class="time">{{item.am ?'上':'下'}}午 {{item.hh}}:{{item.mm}}</div>
                <div class="title">{{item.external.title}}</div>
                <div class="site">{{item.external.site}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { debounce } from "lodash";
import { date, historyItems } from "../../data/time-flies";
import { Period } from "../utils/Period";

export default {
    data() {
        let cursors = [];
        let labels = [];
        try {
            cursors = JSON.parse(
                localStorage.getItem("_action_cursors") || "[]"
            );
            labels = JSON.parse(localStorage.getItem("_labels") || "[]");
        } catch (e) {}
        return {
            date,
            cursors,
            labels,
            last: ""
        };
    },
    computed: {
        historyItems() {
            const period = new Period();
            const dict = {};
            historyItems.forEach(line => {
                const [time, title, site] = line.split(/\n+/);
                const stamp = period.addStamp({
                    raw: time,
                    external: { title, site }
                });
            });
            return [...period.stamps];
        },
        checkboxes() {
            return;
        },
        lastOpen() {},
        occupied() {
            const arr = [];
            let occupying = false;
            for (let i = 0; i < this.historyItems.length; i++) {
                var val = this.cursors[i];
                switch (val) {
                    case "<>":
                        occupying = true;
                        break;
                    case "</>":
                        occupying = false;
                        break;
                    default:
                        arr[i] = occupying;
                }
            }
            return arr;
        }
    },
    methods: {
        toggleOn(e, idx) {
            const { checked } = e.target;
            console.group("toggleOn", checked);
            if (!checked) {
                if (idx === this.last) {
                    this.last = "";
                    console.groupEnd();
                    return;
                }
                this.last = "";
                let pairIdx;
                if (this.cursors[idx] === "<>") {
                    pairIdx = this.cursors.indexOf("</>", idx);
                } else {
                    pairIdx = this.cursors.lastIndexOf("<>", idx);
                }
                if (pairIdx === -1) {
                    console.warn("pairIdx = -1");
                    console.groupEnd();
                    return;
                }
                this.last = pairIdx;
                this.$set(this.cursors, idx, null);
                this.$set(this.cursors, pairIdx, null);
                this.snap();
                console.groupEnd();

                return;
            }
            if (this.last === "") {
                this.last = idx;
            } else {
                if (idx > this.last) {
                    this.$set(this.cursors, this.last, "<>");
                    this.$set(this.cursors, idx, "</>");
                } else {
                    this.$set(this.cursors, idx, "<>");
                    this.$set(this.cursors, this.last, "</>");
                }
                this.snap();
                this.last = "";
                console.info("this", this.cursors);
            }
            console.groupEnd();
        },
        snap: debounce(function() {
            localStorage.setItem(
                "_action_cursors",
                JSON.stringify(this.cursors)
            );
        }, 500),
        snapLabels: debounce(function() {
            localStorage.setItem("_labels", JSON.stringify(this.labels));
        }, 500),
        inputTitle(value, idx) {
            this.$set(this.labels, idx, value);
            this.snapLabels();
        }
    }
};
</script>

<style lang="less" scoped>
.history-item {
    display: flex;
    flex-wrap: wrap;
    .checkbox {
        flex: 0 0 1em;
        input {
            // visibility: hidden;
        }
        &.pairing {
            background: springgreen;
            animation: 3s slidein alternate infinite;
        }
    }
    &:hover .checkbox input {
        visibility: visible;
    }
    .time {
        flex: 0 0 5em;
    }
    .title {
        flex: 3;
    }
    .site {
        flex: 1;
    }
    .group-title {
        flex: 0 0 100%;
        display: flex;
        input {
            flex: 1;
            outline: none;
            border: none;
            font-weight: 700;
            font-size: 1.5em;
            margin-left: -2em;
            background: yellowgreen;
            color: aliceblue;
            line-height: 2em;
            text-indent: 0.5em;
            border-radius: 5px 5px 0 5px;
        }
    }
    &.group {
        background: yellowgreen;
        border-radius: 0 5px 0 0;
    }
    &.group-end {
        background: lightgreen;
        border-radius: 0 0 5px 5px;
    }
    &.occupied {
        background: lightgray;
    }
}
@keyframes pairing {
    from {
        background-color: blueviolet;
    }
    to {
        background-color: yellowgreen;
    }
}
</style>

