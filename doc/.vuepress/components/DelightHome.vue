<template>
  <div>
    <grid-layout
      :layout.sync="layout"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
    >
      <grid-item
        class="info-card"
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
      >
        <router-link :to="`/${item.entry.abPath.replace(/\.md$/,'')}`">{{item.entry.title}}</router-link>
      </grid-item>
    </grid-layout>
  </div>
</template>
<script>
import VueGridLayout from 'vue-grid-layout'

import meta from '../meta/README.json'

const charkXY = (idx, cols = 4) => {
  const x = idx % cols
  const y = Math.floor(idx / cols)
  return { x, y }
}

const testLayout = meta.map((item, idx) => {
  const { x, y } = charkXY(idx)

  return {
    entry: item,
    x: x * 3,
    y,
    w: 2,
    h: 2,
    i: `${idx}`
  }
})

export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  data() {
    return {
      layout: testLayout,
      meta
    }
  }
}
</script>
<style lang="less">
.info-card {
  border: thin solid lightblue;
  border-radius: 4px;
}
</style>