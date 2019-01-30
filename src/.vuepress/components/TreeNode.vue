<template>
  <div class="tree-node">
    <div class="value">
      <div class="pre" :class="{line:as === 'right'}"></div>
      <div class="title">{{value}}</div>
      <div class="sub" :class="{line:as === 'left'}"></div>
    </div>
    <div class="slot">
      <slot/>
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
    right: null,
    as: null
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
  /* padding: 2px; */
}
.value {
  /* border: thin dashed chocolate; */
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.value .pre,
.value .sub {
  flex: 1;
  min-height: 1em;
}
.value .line {
  border-top: thin solid chocolate;
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
</style>


