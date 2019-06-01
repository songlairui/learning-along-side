<template>
    <div class="stage">
        <div class="receive">
            <div class="label">{ { $attrs.width } }:</div>
            {{ $attrs.width }}
        </div>
        <div class="to-emit">
            <input ref="input" type="text" value="200px">
            <button
                @click="$emit('update:width', $refs.input.value)"
            >$emit('update:width', $refs.input.value)</button>
        </div>
    </div>
</template>
<style lang="less" scoped>
@import url("../v-model/base.less");
</style>