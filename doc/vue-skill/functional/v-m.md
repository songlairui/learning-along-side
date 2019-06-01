---
layout: WideLayout
---

> 函数式组件

::: slot left
::: aim
组件需要传入传出任意多个参数时
:::

::: slot ~
::: spoiler click me
_content_
:::

## 透传

<<< @/sfc/Fn/base-h.vue{6}

[其他形式版本 ➡️](#其他形式透传函数式组件)

::: slot ~

#### 其他形式透传函数式组件

单文件组件版:

<<< @/sfc/Fn/base-sfc.vue{5}

单文件组件对应 render 函数版:

<<< @/sfc/Fn/base-sfc-h.vue{8}

JSX 版:

<<< @/sfc/Fn/base-jsx.vue{6}
:::

# 场景

## 组件 v-model 包装

> v-model 即 `$emit('input', value)` 与 `props: { value: null }` 的语法糖
>
> 此处应有官方文档..

## 自定义组件包装 `v-model` 代码

> 预览效果见[左侧 ⬅️](#组件使用-v-model)

如下代码, 组件 modelBase 上使用了 `v-model`

<<< @/sfc/v-model/index.vue {3}

modelBase:

<<< @/sfc/v-model/base.vue

::: tip
上述代码中, 为了简洁, 将非关键的 script style 抽取到了外部.
此处 KEEP_CLEAR 内容是变量或 props 的声明
代码见[右侧 ➡️](#keep-clear)
:::

::: slot ~

### KEEP_CLEAR

<<< @/sfc/v-model/keep-clear.js

如上所示, KEEP_CLEAR 中仅包含常规变量的声明
:::

::: slot left

### 组件使用 v-model

<v-model-index />

如上预览, 输入框输入值,点击按钮,将输入框的值 `$emit` 到上级
:::
