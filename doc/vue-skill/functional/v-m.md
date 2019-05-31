---
layout: WideLayout
---

> 函数式组件

## Basic

<<< @/sfc/Fn/base-h.vue{6}

::: slot ~
<<< @/sfc/Fn/base-sfc.vue{5}
<<< @/sfc/Fn/base-sfc-h.vue{8}
<<< @/sfc/Fn/base-jsx.vue{6}
:::

# 场景

## 使用 v-model

::: slot left
::: aim
组件需要传入传出任意多个参数时
:::

::: warning
DO NOT BE TIRED!
:::

::: slot ~
::: spoiler click me
_content_
:::

<<< @/sfc/Fn/VValue.vue{2}

::: slot left
左侧
:::

::: slot ~
右侧
:::
