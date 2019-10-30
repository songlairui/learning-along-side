<template>
  <div class="transparent-border" v-if="metaType === 'array'">
    <EntryItem v-for="(item,idx) in meta" :key="idx" :meta="item" />
  </div>
  <div v-else-if="metaType === 'object'">
    <h4 v-if="meta.__type__ === 'README'">{{meta.title}}</h4>
    <h6 v-else>{{meta.title}}</h6>
    <grid-layout
      v-if="meta.children"
      class="nest-border"
      :layout.sync="layout"
      :col-num="3"
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
        v-for="(item,idx) in meta.children"
        :x="layout[idx].x"
        :y="layout[idx].y"
        :w="layout[idx].w"
        :h="layout[idx].h"
        :i="layout[idx].i"
      >
        <EntryItem :key="idx" :meta="item" />
      </grid-item>
    </grid-layout>
  </div>
  <div v-else>{{metaType}}</div>
</template>
<script>
import VueGridLayout from 'vue-grid-layout'

export default {
  name: 'EntryItem',
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  props: {
    meta: [Array, Object]
  },
  data() {
    return {
      layout: (this.meta.children || []).map((_, i) => ({
        x: 0,
        y: i,
        w: 3,
        h: 3,
        i
      })),
      tmpLayout: []
    }
  },
  computed: {
    xys: {
      get() {
        return this.tmpLayout.length
          ? this.tmpLayout
          : (this.meta.children || []).map((_, i) => ({
              x: 0,
              y: i,
              w: 3,
              h: 3,
              i
            }))
      },
      set(val) {
        this.tmpLayout = val
      }
    },
    metaType() {
      return Array.isArray(this.meta) ? 'array' : typeof this.meta
    }
  }
}
</script>
<style lang="less">
.nest-border,
.transparent-border {
  border: thin solid rgba(0, 0, 0, 0.5);
  padding: 2px;
  margin: 1px;
}
.nest-border {
  border-color: aquamarine;
}
</style>