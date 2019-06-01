<template>
    <div class="plain-post">
        <h5>DEFINITION:</h5>
        <ShowDefinition :definition="POSTS"/>
    </div>
</template>

<script>
import POSTS from "./posts.graphql";
import ShowDefinition from "./show-definition";

export default {
    components: { ShowDefinition },
    data() {
        return {
            POSTS
        };
    }
};
</script>


<style lang="less" scoped>
.pre {
    white-space: pre;
}
</style>
