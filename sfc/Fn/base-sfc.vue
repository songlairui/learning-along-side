<!-- 单文件组件版透传 -->
<template functional>
    <div v-bind="data.attrs" v-on="listeners">
        <!-- 似乎只显示了默认插槽 -->
        <slot/>
    </div>
</template>
