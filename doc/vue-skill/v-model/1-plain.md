---
layout: WideLayout
---

# Plain

> 单层基本变量 `String`

```gql
values:
    title:
    name:

```

::: slot ~
<v-model-plain-posts :post.sync='post' :comment.sync='comment' v-model='text'/>
:::

<!-- <<< @/sfc/v-model/plain-posts.vue -->

<script>
export default {
    data() {
        return {
            posts: [],
            post: {
                comments:[],
                id: '',
                text: '',
                // abstract:'',
                // tags: []
            },
            comment:{
                // id:'',
                text:''
            },
            text: 'Default Text'
        }
    }
}
</script>
