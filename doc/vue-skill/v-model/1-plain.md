---
layout: WideLayout
---

# Plain

> 单层基本变量 `String`

<<< @/sfc/v-model/posts.graphql

预览[左侧 ⬅️](#响应-sync)

```vue
<v-model-plain-posts :post.sync="post" :comment="comment" />
<v-model-plain-posts :post.sync="post" :comment.sync="comment" />
```

**组件效果:**

带 `.sync` 修饰符的 comment 变量,会自动生成每个字段对应的表单.
不带 sync 则不显示.

**使用场景:**

- 组件图形化配置.
- 延伸, 组件代码自动生成

**对比现有产品:**

抽象开发流程, 统一开发规范.
可桥接目的:通过 graphql 描述文件,生成工作需要代码.
中间过程, 预编译, 模板判断.

**more**

- 设计时面板
  - [ ] 表单项完善  
         自定义类型拓展
  - [ ] 可选项之间关联  
         正交关系设计  
         如果不,则代码写
  - [ ] 默认属性  
         默认属性模板
- 运行时使用
- 组件及版本?
  - 因为组件不能够任意颗粒度灵活, 所以有这一层的版本.
  - 完全灵活的完成之后, 就不需要这样走版本了.或者说,版本是绝对向下兼容的
- 产品目标:
  - 运行时交付产物
  - 必要环节:  
    持续集成步骤
    - 构建过程配置
    - 预编译
    - 缓存
- 产品环境
  - 创新点
  - 生产力发生现场

::: slot left

### 响应 .sync

<ClientOnly>
   <v-model-plain-posts :post.sync='post' :comment.sync='comment' v-model='text'/>
</ClientOnly>
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
