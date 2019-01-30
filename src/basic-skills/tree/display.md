# 显示树

<div>
    <input v-model.number='nextNum' type='number'>
    <button @click='push'>Push one number</button>
</div>

> 点击,插入数值到树中

<div class='display-wrapper'>
    <div class='display' ref='display' :style='displayStyle'>
        <div style='display:flex'>
            <tree ref='tree'></tree>
        </div>
    </div>
</div>

> 灰色块: 单侧为空的子节点

<script>
import Vue from 'vue'
import Tree from './Tree.js'

const wait = (timeout = 10) => new Promise(r => setTimeout(r, timeout))

export default {
    name: 'display',
    components: { Tree },
    data() {
        return {
            elements: [4,2,6,3,5,1,7,0,8,4,2,3,5,6,6,3,2,3,4,53],
            nextNum: 9,
            width: 10
        }
    },
    computed: {
        displayStyle() {
            return `width: ${this.width}px`
        }
    },
    methods:{
        async insert(val) {
            await this.$refs.tree.insert(val)
        },
        async push(){
            await this.insert(this.nextNum)
            await wait(17)
            this.nextNum = Math.round(Math.random() * 100)
            await this.reWidth()
        },
        async reWidth() {
            await wait(20)
            const $el = this.$refs.display
            this.width = $el.scrollWidth
        }
    },
    async mounted() {
        while(this.elements.length) {
            await new Promise(r => setTimeout(r, 13))
            await this.insert(this.elements.shift())
        }
        await this.reWidth()
    }
}
</script>
<style>
.display-wrapper {
    overflow: auto
}
.blank-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
.blank { 
    padding: .2em;
    height: 1.4em;
    background: #ccc;
    color: #fff;
    display: inline-block;
    border-radius: .2em;
}
</style>
