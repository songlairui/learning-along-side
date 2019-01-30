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
      }
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
      const vm = this;
      const { setHeight } = this;
      return ['left', 'right'].map((slot) => {
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
      });
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

      const leftOrRight = +val < +this.value ? 'left' : 'right';
      await this.setLeftOrRight(leftOrRight, val);
    },
    async setLeftOrRight(leftOrRight, val) {
      // console.group('-->', leftOrRight);
      if (this[leftOrRight] === null) {
        this[leftOrRight] = val;
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
    }
  }
};

export default Tree;
