<template>
  <component
    v-if="dynamicComponent"
    :is="dynamicComponent"
    :meta="meta"
    ref="v"
    :root="true"
    :rowHeight="30"
    :availableH="20"
    :availableW="36"
  ></component>
  <div v-else></div>
</template>
<script>
import meta from '../../../data/cover.json'

export default {
  data() {
    return {
      meta: meta, // root meta
      dynamicComponent: null
    }
  },
  async mounted() {
    await import('../lib/EntryItem').then(module => {
      this.dynamicComponent = module.default
    })
    this.$refs.v.syncWithSub()
  }
}
</script>
<style lang="less">
.info-card {
  outline: thin solid rgba(0, 30, 60, 0.1);
  outline-offset: -1px;
  // border-radius: 4px;
  // box-sizing: border-box;
}
</style>