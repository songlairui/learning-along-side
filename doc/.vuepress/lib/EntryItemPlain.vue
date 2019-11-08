<template>
  <div class="endPoint" v-if="meta.__type__ !== 'FOLDER'">
    <router-link :to="meta.href">
      <h6>{{meta.title}}</h6>
    </router-link>
  </div>
  <div v-else class="nest-border">
    <div class="info-card readme" v-if="hasCover">
      <div class="endPoint">
        <router-link :to="meta.cover.href">
          <h5>{{meta.cover.title}}</h5>
        </router-link>
      </div>
    </div>
    <div class="info-card" v-for="(item,idx) in meta.children">
      <EntryItemPlain :key="idx" :meta="item" :depth="depth+1" ref="sub" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'EntryItemPlain',
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
    return {}
  },
  computed: {
    hasCover() {
      return !this.root && !!this.meta.cover
    }
  }
}
</script> 
<style lang="less">
.nest-border > .info-card {
  // display: flex;
  // flex-wrap: wrap;
  padding: 0px 0.4em 0 0.8em;
  &.readme {
    padding: 0;
  }
}
</style>
<style lang="less" scoped>
h5,
h6 {
  margin: 0;
}
</style>