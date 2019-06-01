<template>
    <div class="theme-container" :class="pageClasses">
        <Navbar/>
        <Content class="custom ary-home"/>
    </div>
</template>

<script>
import Navbar from "@theme/components/Navbar.vue";

export default {
    components: { Navbar },

    data() {
        return {};
    },

    computed: {
        pageClasses() {
            const userPageClass = this.$page.frontmatter.pageClass;
            return [
                {
                    "no-sidebar": true
                },
                userPageClass
            ];
        }
    },

    mounted() {},

    methods: {}
};
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style lang="less" scoped>
.theme-container {
    padding-top: 60px;
    ::v-deep .custom.ary-home {
        display: flex;
        flex-direction: column;
        ul {
            padding: 0.3em 0.3em 0.3em inherit;
            display: grid;
            grid-gap: 0.5em;
            grid-auto-flow: row dense;
            border-radius: 0.5em;
            background: rgba(0, 0, 0, 0.05);
        }
        > ul {
            grid-auto-flow: column dense;
            grid-template-rows: auto;
            grid-template-columns: repeat(4, 1fr);
            > li > ul {
                grid-template-rows: auto;
                grid-template-columns: repeat(2, 1fr);
            }
        }
    }
}
</style>

