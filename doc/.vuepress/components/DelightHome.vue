<template>
  <component v-if="dynamicComponent" :is="dynamicComponent" :meta="meta" :root="true"></component>
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
  mounted() {
    import('../lib/EntryItem').then(module => {
      this.dynamicComponent = module.default
    })
  }
}
</script>
<style lang="less">
.info-card {
  border: thin solid lightblue;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>