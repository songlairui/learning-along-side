<template>
  <div class="tree-node">
    <div class="value" @click="blink">
      <div class="pre" :class="{line:as === 'right'}"></div>
      <div class="title" :class="{blink: blinking}">
        {{value}}
        <div class="tip-factor" title="balanceFactor">{{ balanceFactor }}</div>
        <div class="btn-close" @click.stop="inspect">i</div>
      </div>
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
const wait = (timeout = 10) => new Promise(r => setTimeout(r, timeout));

export default {
  name: "TreeNode",
  props: {
    value: {
      type: null,
      default: "-"
    },
    left: null,
    right: null,
    height: null,
    as: null,
    balanceFactor: null
  },
  data() {
    return {
      blinking: false
    };
  },
  computed: {
    hasChild() {
      return this.left || this.right;
    }
  },
  methods: {
    async blink(timeout = 30) {
      const interval = timeout / 3;
      this.blinking = true;
      await wait(interval);
      this.blinking = false;
      await wait(interval);
      this.blinking = true;
      await wait(interval);
      this.blinking = false;
      await wait(1);
    },
    inspect() {
      console.info("this", this);
      this.$emit("select", this);
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
  cursor: pointer;
  position: relative;
}
.title [class^="tip"] {
  /* position: absolute; */
  font-size: 0.5em;
  background: silver;
  color: #fff;
  border-radius: 3px;
}
.title [class^="btn"] {
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  font-size: 0.5em;
  color: #fff;
  background: silver;
  border-radius: 3px;
}
.title:hover [class^="btn"] {
  display: block;
  min-width: 1em;
}
[class^="btn"]:hover {
  background: gray;
}
.title.blink {
  border-color: transparent;
  background: lightgray;
  color: #fff;
}
.child {
  display: flex;
  border-radius: 5px;
  padding: 2px;
}
</style>


