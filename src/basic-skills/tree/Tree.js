import TreeNode from './TreeNode';

const Tree = {
  name: 'Tree',
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
    leftNode() {
      const h = this.$createElement;
      const holder =
        this.holderBlank &&
        h('div', { slot: 'left', class: 'blank-wrapper' }, [
          h('div', { class: 'blank' }, '.')
        ]);
      return this.left === null
        ? holder
        : h(Tree, {
            slot: 'left',
            ref: 'left'
          });
    },
    rightNode() {
      const h = this.$createElement;
      const holder =
        this.holderBlank &&
        h('div', { slot: 'right', class: 'blank-wrapper' }, [
          h('div', { class: 'blank' }, '.')
        ]);
      return this.right === null
        ? holder
        : h(Tree, {
            slot: 'right',
            ref: 'right'
          });
    }
  },
  render(h) {
    const { leftNode, rightNode, value, left, right } = this;
    return h(TreeNode, { props: { value, left, right } }, [
      leftNode,
      rightNode
    ]);
  },
  methods: {
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
