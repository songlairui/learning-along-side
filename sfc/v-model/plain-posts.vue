<template>
    <div class="plain-post">
        <h5>DEFINITION:</h5>
        <ShowDefinition :definition="POSTS"/>
        <div class="pre">{{receiving}}</div>
        <MultiSync :prop="prop" v-for="prop in targetProps" :key="prop" :definition="POSTS"/>
    </div>
</template>

<script>
import POSTS from "./posts.graphql";
import MultiSync from "./multi-sync";
import ShowDefinition from "./show-definition";

export default {
    components: { MultiSync, ShowDefinition },
    props: {
        post: null,
        comment: null,
        value: null
    },
    data() {
        return {
            POSTS
        };
    },
    computed: {
        targetProps() {
            return Object.keys(this.$listeners)
                .filter(key => key.startsWith("update:"))
                .map(key => key.slice(7))
                .filter(key => this[key] !== undefined);
        },
        receiving() {
            return this.targetProps.reduce((result, key) => {
                result[key] = this[key];
                return result;
            }, {});
        }
    },
    created() {
        console.log(this, this.$listeners, "plain-posts");
    }
};
</script>


<style lang="less" scoped>
.pre {
    white-space: pre;
}
</style>
