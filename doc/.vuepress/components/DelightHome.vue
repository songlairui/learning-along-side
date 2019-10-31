<template>
  <component
    v-if="dynamicComponent"
    :is="dynamicComponent"
    :meta="meta"
    ref="v"
    :root="true"
    :rowHeight="rowHeight"
    :availableH="availableH"
    :availableW="availableW"
  ></component>
  <div v-else></div>
</template>
<script>
import meta from '../../../data/cover.json'
import { wait } from '../lib/utils'

export default {
  data() {
    return {
      meta, // root meta
      dynamicComponent: null,
      rowHeight: 30,
      availableH: 20,
      availableW: 36
    }
  },
  async mounted() {
    const recalc = () => {
      const { clientWidth, clientHeight } = document.documentElement
      this.availableH = Math.floor(clientHeight / this.rowHeight)
      this.availableW = Math.floor(clientWidth / 40)
    }
    recalc()
    await wait(20)
    await import('../lib/EntryItem').then(module => {
      this.dynamicComponent = module.default
    })
    await wait(20)
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