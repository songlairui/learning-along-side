<template>
  <div class="__home__">
    <div class="__nav__">songlairui</div>
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
  </div>
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
      this.availableH = Math.floor(
        Math.max(clientHeight - 40, 480) / this.rowHeight
      )
      this.availableW = Math.floor(Math.max(clientWidth, 640) / 40)
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
<style lang="less" scoped>
.__home__ {
  height: 100%;
  display: flex;
  flex-direction: column;
  .__nav__ {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
}
</style>
<style lang="less">
html,
body,
#app {
  height: 100%;
}
.info-card {
  outline: thin solid rgba(255, 255, 255, 0.3);
  outline-offset: -1px;
  border-radius: 4px;
  box-sizing: border-box;
  background: rgba(155, 150, 200, 0.1);
}
</style>