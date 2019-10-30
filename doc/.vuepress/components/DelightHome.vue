<template>
  <component v-if="dynamicComponent" :is="dynamicComponent"></component>
  <div v-else></div>
</template>
<script>
export default {
  data() {
    return {
      dynamicComponent: null
    }
  },
  mounted() {
    import('../lib/Entries').then(module => {
      this.dynamicComponent = module.default
    })
  }
}
</script>
<style lang="less">
</style>