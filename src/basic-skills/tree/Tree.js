import Vue from 'vue';
const TreeNode = Vue.component('TreeNode');

const Tree = {
  name: 'Tree',
  props: {
    as: null
  },
  data() {
    return {
      value: null,
      left: null,
      right: null
    };
  },
  computed: {
    holderBlank() {
      return this.left !== null || this.right !== null;
    },
    childNodes() {
      const h = this.$createElement;
      return ['left', 'right'].map((slot) => {
        if (this[slot] === null) {
          return this.genHolder(slot);
        }
        return h(Tree, { slot, ref: slot, props: { as: slot } });
      });
    }
  },
  render(h) {
    const { childNodes, value, left, right, as } = this;
    return h(TreeNode, { props: { value, left, right, as } }, childNodes);
  },
  methods: {
    genHolder(slot) {
      return (
        this.holderBlank &&
        h('div', { slot, class: 'blank-wrapper' }, [
          h('div', { class: 'blank' }, '.')
        ])
      );
    },
    insert(val) {
      if (this.value === null) {
        this.value = val;
        return;
      }
      if (+val < +this.value) {
        this.setLeft(val);
        return;
      }
      this.setRight(val);
    },
    setLeft(val) {
      if (this.left === null) {
        this.left = val;
      }
      this.$nextTick(() => {
        this.$refs.left.insert(val);
      });
    },
    setRight(val) {
      if (!this.right) {
        this.right = val;
      }
      this.$nextTick(() => {
        this.$refs.right.insert(val);
      });
    }
  }
};

export default Tree;
