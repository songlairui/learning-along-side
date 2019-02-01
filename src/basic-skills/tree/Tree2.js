import Vue from 'vue';

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
      height: 0
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
    leftHeight() {
      const leftVm = this.leftNode && this.leftNode.componentInstance;
      if (leftVm) {
        return leftVm.height + 1;
      }
      return 0;
    },
    rightHeight() {
      const rightVM = this.rightNode && this.rightNode.componentInstance;
      if (rightVM) {
        return rightVM.height + 1;
      }
      return 0;
    },
    balanceFactor() {
      return this.leftHeight - this.rightHeight;
    },
    blankHolder() {
      return this.left !== null || this.right !== null;
    }
  },
  methods: {
    getHeight() {
      return Math.max(this.leftHeight, this.rightHeight);
    },
    getBalanceFactor() {
      return this.leftHeight - this.rightHeight;
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
    this.height = this.getHeight();
    // this.postData.factor = this.getBalanceFactor();
    console.info('mounted', this.value, this.height);
  },
  render(h) {
    const vm = this;
    const { value, left, right, as, postData, balanceFactor } = this;
    // balanceFactor will reCalc after this render process
    return h(TreeNode, {
      key: value,
      ref: 'vm',
      props: { value, left, right, as, balanceFactor },
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
