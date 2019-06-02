<template>
    <div class="time-files">
        <h1>{{ date }}</h1>
        <p class="pre">{{ cursors }}</p>
        <div class="history-items">
            <div class="history-item" v-for="(item,idx) in historyItems">
                <div class="checkbox">
                    <input type="checkbox" @click="toggleOn($event, idx)" :checked="!!cursors[idx]">
                </div>
                <div class="time">{{item.am ?'上':'下'}}午 {{item.hh}}:{{item.mm}}</div>
                <div class="title">{{item.external.title}}</div>
                <div class="site">{{item.external.site}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { date, historyItems } from "../../data/time-flies";
import { Period } from "../utils/Period";

export default {
    data() {
        let cursors = [];
        try {
            cursors = JSON.parse(
                localStorage.getItem("_action_cursors") || "[]"
            );
        } catch (e) {}
        return {
            date,
            cursors,
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
        occupyed() {}
    },
    methods: {
        toggleOn(e, idx) {
            const { checked } = e.target;
            console.group("toggleOn", checked);
            if (!checked) {
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
        snap() {
            localStorage.setItem(
                "_action_cursors",
                JSON.stringify(this.cursors)
            );
        }
    }
};
</script>

<style lang="less" scoped>
.history-item {
    display: flex;
    .checkbox {
        flex: 0 0 1em;
        input {
            // visibility: hidden;
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
}
</style>

