import Vue from 'vue';

const wait = (timeout = 20) => new Promise((r) => setTimeout(r, timeout));

const TreeNode = Vue.component('TreeNode');

const TreeC = {
  name: 'Tree',
  props: {
    upperContext: {
      type: Object,
      default: () => ({})
    },
    as: null
  },
  data() {
    return {
      value: this.upperContext.value || null,
      leftNode: null,
      rightNode: null,
      underMe: this.upperContext.underMe || [],
      postData: {
        factor: 0
      },
      height: -1
    };
  },
  computed: {
    underMyLeft() {
      if (this.value === null) return [];
      return this.underMe.filter((item) => item < this.value);
    },
    underMyRight() {
      if (this.value === null) return [];
      return this.underMe.filter((item) => item >= this.value);
    },
    left() {
      const val = this.underMyLeft[0];
      return val === undefined ? null : val;
    },
    right() {
      const val = this.underMyRight[0];
      return val === undefined ? null : val;
    },
    balanceFactor() {
      return 0;
      // return this.getLeftHeight() - this.getRightHeight();
    },
    blankHolder() {
      return this.left !== null || this.right !== null;
    }
  },
  methods: {
    getLeftHeight() {
      if (this.left === null) {
        return 0;
      }
      const { componentInstance } = this.leftNode;
      if (!componentInstance || componentInstance.getHeight) return 0;
      return componentInstance.getHeight() + 1;
    },
    getRightHeight() {
      if (this.right === null) {
        return 0;
      }
      const { componentInstance } = this.rightNode;
      if (!componentInstance || componentInstance.getHeight) return 0;
      return componentInstance.getHeight() + 1;
    },
    getHeight() {
      const [left, right] = [this.getLeftHeight(), this.getRightHeight()];
      const height = Math.max(left, right);
      this.height = height;
      return height;
    },
    getBalanceFactor() {
      return this.getLeftHeight() - this.getRightHeight();
    },
    insertArray(arr) {
      if (!arr.length) return;
      if (this.value === null) {
        this.value = arr[0];
      }
      this.underMe.push(...arr.slice(1));
    },
    insert(val) {
      if (this.value === null) {
        this.value = val;
        return;
      }
      this.underMe.push(val);
    },
    genChildNodes() {
      const { blankHolder, $createElement: ch } = this;
      const childNode = [this.underMyLeft, this.underMyRight].map(
        ([value, ...reserved], idx) => {
          if (typeof value !== 'number') {
            return blankHolder ? (
              <div class="blank-wrapper">
                <div class="blank">.</div>
              </div>
            ) : null;
          }
          return ch(TreeC, {
            props: {
              upperContext: {
                value,
                underMe: reserved
              },
              as: idx ? 'right' : 'left'
            }
          });
        }
      );
      this.leftNode = childNode[0];
      this.rightNode = childNode[1];
    }
  },
  watch: {
    upperContext: {
      handler({ value, underMe }) {
        this.value = value;
        this.underMe = underMe;
      }
    },
    underMe: {
      immediate: true,
      handler() {
        this.genChildNodes();
      }
    }
  },
  mounted() {
    this.getHeight();
  },
  render(h) {
    const vm = this;
    const { value, left, right, as, balanceFactor, height } = this;
    // balanceFactor will reCalc after this render process
    return h(TreeNode, {
      key: value,
      ref: 'vm',
      props: { value, left, right, as, balanceFactor: height },
      scopedSlots: {
        left() {
          return vm.leftNode;
        },
        right() {
          return vm.rightNode;
        }
      }
    });
  }
};

export default TreeC;
