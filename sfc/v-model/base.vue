<template>
    <div class="stage">
        <div class="receive">{{ $attrs.value }}</div>
        <div class="to-emit">
            <input ref="input" type="text" value="hello">
            <button @click="$emit('input', $refs.input.value)">
                $emit('input', $refs.input.value)
            </button>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import url("./base.less");
</style>