import Vue from 'vue';

const TreeNode = Vue.component('TreeNode');
const wait = (timeout = 20) => new Promise((r) => setTimeout(r, timeout));

const Tree = {
  name: 'Tree',
  props: {
    as: null
  },
  data() {
    return {
      value: null,
      left: null,
      right: null,
      childHeight: {
        left: 0,
        right: 0
      },
      leftNode: null,
      rightNode: null
    };
  },
  computed: {
    height() {
      return Math.max(this.childHeight.left, this.childHeight.right);
    },
    balanceFactor() {
      return this.childHeight.left - this.childHeight.right;
    },
    holderBlank() {
      return this.left !== null || this.right !== null;
    },
    childNodes() {
      return [this.leftNode, this.rightNode];
    }
  },
  render(h) {
    const { childNodes, value, left, right, height, as, balanceFactor } = this;
    return h(
      TreeNode,
      {
        ref: 'vm',
        props: { value, left, right, height, as, balanceFactor }
      },
      childNodes
    );
  },
  watch: {
    height(val) {
      this.$emit('height', val);
    }
  },
  methods: {
    genHolder(slot) {
      return (
        this.holderBlank && (
          <div slot={slot} class="blank-wrapper">
            <div class="blank">.</div>
          </div>
        )
      );
    },
    genChildNode(slot) {
      const vm = this;
      const { setHeight } = this;
      if (this[slot] === null) {
        return this.genHolder(slot);
      }
      return (
        <tree
          slot={slot}
          ref={slot}
          as={slot}
          onHeight={setHeight.bind(vm, slot)}
        />
      );
    },
    async blink() {
      try {
        await this.$refs.vm.blink();
      } catch (error) {
        console.warn('e', error);
      }
    },
    async insert(val) {
      if (this.value === null) {
        // console.info(`${val} [OK]`);
        this.value = val;
        // 向上 emit 树的高度
        this.$emit('height', 1);
        return;
      }
      await this.blink();
      const pool = ['left', 'right'];
      const [leftOrRight, reserved] =
        +val < +this.value ? pool : pool.reverse();
      await this.setLeftOrRight(leftOrRight, val, reserved);
    },
    async setLeftOrRight(leftOrRight, val, reserved) {
      // console.group('-->', leftOrRight);
      if (this[leftOrRight] === null) {
        this[leftOrRight] = val;
        this[`${leftOrRight}Node`] = this.genChildNode(leftOrRight);
      }
      if (this[reserved] === null) {
        this[`${reserved}Node`] = this.genChildNode(reserved);
      }
      await wait(1);
      await this.$refs[leftOrRight].insert(val);
      // console.groupEnd();
    },
    setHeight(key, val) {
      this.childHeight[key] = val + 1;
    },
    traverseInOrder() {
      let pool = [];
      if (this.left !== null) {
        pool = pool.concat(this.$refs.left.traverseInOrder());
      }
      if (this.value !== null) {
        pool.push(this.value);
      }
      if (this.right !== null) {
        pool = pool.concat(this.$refs.right.traverseInOrder());
      }
      return pool;
    },
    async removeChild(nodeVmToRemove) {
      if (!nodeVmToRemove) return false;
      if (this.$refs.left === nodeVmToRemove) {
        this.left = null;
        await wait(1);
        return true;
      }
      if (this.$refs.right === nodeVmToRemove) {
        this.right = null;
        await wait(1);
        return true;
      }
      return false;
    },
    async replaceChild(nodeVmToReplace, payloadNodeVm) {
      if (!nodeVmToReplace || !payloadNodeVm) {
        return false;
      }
      if (this.$refs.left === nodeVmToReplace) {
        this.left = payloadNodeVm;
        await wait(1);
        return true;
      }
      if (this.$refs.right === nodeVmToReplace) {
        this.right = payloadNodeVm;
        await wait(1);
        return true;
      }
      return false;
    },
    async find(value) {
      // Check the root.
      if (this.value === value) {
        return this;
      }

      if (value < this.value && this.left !== null) {
        // Check left nodes.
        return this.$refs.left.find(value);
      }

      if (value > this.value && this.right !== null) {
        // Check right nodes.
        return this.$refs.right.find(value);
      }

      return null;
    }
  }
};

export default Tree;
