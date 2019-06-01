---
layout: WideLayout
---

# 模糊的小目标 基本功能拓展·第二

## bind.sync - 探索一

> [bind.sync][1]

入口文件 [预览如左 ⬅️](#bind-sync-函数式组件):

<<< @/sfc/bind-sync/index-multi.vue {3}

`line 3` 在 sfc 模板中写 bind.sync, 在 VNode 中会生成形如 `on: {'update:a':f(),'update:b':f()}`的事件监听.

函数式组件`multi-sync.js`:

<<< @/sfc/bind-sync/multi-sync.js {5,6,7,11,14,17}

`line 5-7` 对监听事件名进行过滤,取得所有 bind.sync 的变量名  
`line 11-17` 遍历生成 input 标签, 输入时对父对象赋值

::: slot left

### bind-sync + 函数式组件

> 为每个传入参数生成一个 input, 并能够赋值

<bind-sync-index-multi />

:::

::: slot ~

## 探索一 小结

- 问题一: 未使用到 `$emit('update:a')` 事件监听
- 问题二: 父级组件传入参数必须为顶层参数

此方法更适合非函数组件,
在子组件中,取 `$on / $listener` 遍历,
赋值时通过 `$emit('update:a', value)` 方式, 可适配父级传非顶层参数

拓展方向:

- 每个赋值参数需要有类型, 针对不同的类型使用不同的 input:type
  - 丰富 props 的 type 描述
  - 丰富 v-input 组件
- input 数据嵌套场景
  - plain , 常规 solo 单项
  - array , 数组 mono 多项
  - object, key mono 多项
  - array , 数组 multi-solo 多项 // 避免
  - object, key multi-solo 多项 // 避免

:::

[1]: https://cn.vuejs.org/v2/guide/components-custom-events.html#sync-修饰符
