---
layout: WideLayout
---

# Plain

> 单层基本变量 `String`

<<< @/sfc/v-model/posts.graphql

预览[左侧 ⬅️](#响应-sync)

```vue
<v-model-plain-posts :post.sync="post" :comment.sync="comment" />
```

::: slot left

### 响应 .sync

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
