<template>
    <div class="time-files">
        <h1>{{ date }}</h1>
        <div class="history-items">
            <div class="history-item" v-for="(item,idx) in historyItems">
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
        return {
            date
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
        }
    }
};
</script>

<style lang="less" scoped>
.history-item {
    display: flex;
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

