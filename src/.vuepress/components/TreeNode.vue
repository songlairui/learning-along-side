<template>
  <div class="tree-node">
    <div class="value">
      <div class="title">{{value}}</div>
      <div class="slot">
        <slot/>
      </div>
    </div>
    <div class="child" :class="{'has-child': hasChild}">
      <div class="left">
        <slot name="left"/>
      </div>
      <div class="right">
        <slot name="right"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TreeNode",
  props: {
    value: {
      type: null,
      default: "--"
    },
    left: null,
    right: null
  },
  computed: {
    hasChild() {
      return this.left || this.right;
    }
  }
};
</script>
<style scoped>
.tree-node {
  display: flex;
  flex-direction: column;
  padding: 2px;
}
.value {
  /* border: thin dashed chocolate; */
  border-radius: 5px;
  text-align: center;
}
.title {
  padding: 0.2em;
  display: inline-block;
  border: thin dashed chocolate;
  border-radius: 5px;
  text-align: center;
}
.child {
  display: flex;
  border-radius: 5px;
  padding: 2px;
}
.child.has-child {
  border: thin dotted chocolate;
}
</style>


