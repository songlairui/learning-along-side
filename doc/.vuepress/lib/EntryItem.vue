<template>
  <div v-if="meta.__type__ !== 'FOLDER'">
    <h6 @click="debug">{{meta.title}}</h6>
  </div>
  <div v-else>
    <template v-if="meta.cover">
      <h4 @click="debug">{{meta.cover.title}}</h4>
    </template>
    <grid-layout
      v-if="meta.children && meta.children.length"
      class="nest-border"
      :layout="layout"
      @layout-updated="update"
      :col-num="12"
      :row-height="30"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[10, 10]"
      :use-css-transforms="true"
      ref="vgl"
    >
      <grid-item
        class="info-card"
        v-for="(item,idx) in meta.children"
        :x="layout[idx].x"
        :y="layout[idx].y"
        :w="layout[idx].w"
        :h="layout[idx].h"
        :i="layout[idx].i"
      >
        <EntryItem :key="idx" :meta="item" :depth="depth+1" @updateH="updateSelfItem" />
      </grid-item>
    </grid-layout>
  </div>
</template>
<script>
import VueGridLayout from 'vue-grid-layout'
import { charkXY } from './utils'
import squarify from 'squarify'

// const container = { x0: 0, y0: 0, x1: 36, y1: 20 }

export default {
  name: 'EntryItem',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  props: {
    root: Boolean,
    meta: {
      type: [Object],
      default: () => ({})
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      tmplayout: []
    }
  },
  computed: {
    colNum() {
      return colNums[this.depth] || 4
    },
    metaType() {
      return Array.isArray(this.meta) ? 'array' : typeof this.meta
    },
    subWidth() {
      return Math.ceil(Math.sqrt((this.meta.children || []).length)) || 1
    },
    subCols() {
      return Math.floor(12 / (this.subWidth || 1))
    },
    initLayout() {
      return (this.meta.children || []).map((_, i) => {
        let h = 1
        if (_.children) {
          h += 1 * Math.ceil(Math.sqrt(_.children.length))
        }
        const w = this.subCols
        const { x, y } = charkXY(i, this.subWidth || 1)
        return {
          x: x * w,
          y: y * h,
          w,
          h,
          i
        }
      })
    },
    layout: {
      get() {
        return this.tmplayout.length ? this.tmplayout : this.initLayout
      },
      set(val) {
        this.tmplayout = val
      }
    }
  },
  methods: {
    debug() {
      console.info(this)
    },
    expand() {},
    updateSelfItem() {},
    update(e) {
      this.tmplayout = e
    }
  }
}
</script>
<style lang="less">
// .transparent-border {
// outline: thin solid rgba(0, 0, 0, 0.5);
// }
// .nest-border {
//   outline: thin solid aquamarine;
// }
</style>

<style lang="less" scoped>
h4,
h6 {
  overflow: hidden;
  margin: 0;
}
h4 {
  text-align: center;
}
</style>