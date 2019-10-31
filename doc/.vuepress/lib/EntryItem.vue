<template>
  <div class="endPoint" v-if="meta.__type__ !== 'FOLDER'">
    <h6 @click="debug">{{meta.title}}</h6>
  </div>
  <div v-else>
    <grid-layout
      class="nest-border"
      :layout.sync="layout"
      :col-num="colNums"
      :row-height="rowHeight"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="margin"
      :use-css-transforms="true"
      :auto-size="true"
      :verticalCompact="false"
    >
      <grid-item class="info-card" v-bind="coverItemProps" v-if="hasCover" :static="true">
        <div class="endPoint">
          <h4 @click="debug">{{meta.cover.title}}</h4>
        </div>
      </grid-item>
      <grid-item
        class="info-card"
        v-for="(item,idx) in hasCover ? layout.slice(1) : layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <EntryItem
          :key="item.i"
          :meta="meta.children[idx]"
          :depth="depth+1"
          :availableH="item.h"
          :availableW="item.w"
          :rowHeight="rowHeight"
          ref="sub"
        />
      </grid-item>
    </grid-layout>
  </div>
</template>
<script>
import VueGridLayout from 'vue-grid-layout'
import { charkXY, wait } from './utils'
import squarify from 'squarify'

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
    },
    availableH: {
      type: Number,
      default: 20
    },
    availableW: {
      type: Number,
      default: 36
    },
    rowHeight: {
      type: Number,
      default: 30
    }
  },
  data() {
    return {
      layout: (this.meta.children || []).map((item, i) => ({
        x: 0,
        y: i,
        w: 1,
        h: 1,
        i
      })),
      margin: [0, 0]
    }
  },
  computed: {
    hasCover() {
      return !this.root && !!this.meta.cover
    },
    colNums() {
      return Math.max(4, this.availableW)
    },
    coverItemProps() {
      return {
        x: 0,
        y: 0,
        w: this.colNums,
        h: 1,
        i: 0
      }
    },
    deltaY() {
      return this.hasCover ? 1 : 0
    },
    availableY1() {
      return Math.max(1, this.availableH - this.deltaY)
    },
    container() {
      const x0 = 0
      const y0 = 0
      const x1 = Math.max(4, this.availableW)
      const y1 = this.availableY1

      return { x0, y0, x1, y1 }
    },
    closestChildren() {
      return (this.meta.children || []).map(item => {
        const tmpItem = { ...item }
        delete tmpItem.children
        return tmpItem
      })
    },
    output() {
      return squarify(this.closestChildren, this.container).map((item, i) => {
        let { x0, y0, x1, y1 } = item
        x0 = Math.round(x0)
        x1 = Math.round(x1)
        y0 = Math.round(y0)
        y1 = Math.round(y1)
        const w = Math.max(1, x1 - x0)
        const h = item.value === 1 ? 1 : Math.max(1, y1 - y0)
        return { x: x0, y: y0 + this.deltaY, w, h, i: i + 1 }
      })
    }
  },

  methods: {
    sync() {
      this.layout = JSON.parse(
        JSON.stringify(
          this.hasCover ? [this.coverItemProps, ...this.output] : this.output
        )
      )
    },
    async syncWithSub() {
      this.sync()
      await wait()
      const { sub = [] } = this.$refs
      sub.forEach(async item => {
        item.syncWithSub()
      })
    },
    debug() {
      console.info(this)
    }
  },
  mounted() {
    if (this.root) {
      // this.syncWithSub()
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
.endPoint {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
h4 {
  text-align: center;
}
</style>