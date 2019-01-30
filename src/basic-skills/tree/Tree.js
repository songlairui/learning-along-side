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
      right: null
    };
  },
  computed: {
    holderBlank() {
      return this.left !== null || this.right !== null;
    },
    childNodes() {
      return ['left', 'right'].map((slot) => {
        if (this[slot] === null) {
          return this.genHolder(slot);
        }
        return <tree slot={slot} ref={slot} as={slot} />;
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
        this.holderBlank && (
          <div slot={slot} class="blank-wrapper">
            <div class="blank">.</div>
          </div>
        )
      );
    },
    async insert(val) {
      if (this.value === null) {
        console.info(`${val} [OK]`);
        this.value = val;
        return;
      }
      const leftOrRight = +val < +this.value ? 'left' : 'right';
      await this.setLeftOrRight(leftOrRight, val);
    },
    async setLeftOrRight(leftOrRight, val) {
      console.group('-->', leftOrRight);
      if (this[leftOrRight] === null) {
        this[leftOrRight] = val;
      }
      await wait(1);
      await this.$refs[leftOrRight].insert(val);
      console.groupEnd();
    }
  }
};

export default Tree;
