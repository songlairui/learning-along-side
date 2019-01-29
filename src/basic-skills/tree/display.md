# 显示树

<div>
    <input v-model.number='nextNum' type='number'>
    <button @click='push'>Push one number</button>
</div>
<div class='display-wrapper'>
    <div class='display' ref='display' :style='displayStyle'>
        <tree ref='tree'></tree>
    </div>
</div>

<script>
import Vue from 'vue'
import Tree from './Tree.js'

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
        insert(val) {
            this.$refs.tree.insert(val)
        },
        push(){
            this.insert(this.nextNum)
            this.$nextTick(() => {
                this.nextNum = Math.round(Math.random() * 100)
                this.reWidth()
            })
        },
        reWidth() {
            setTimeout(() => {
                const $el = this.$refs.display
                this.width = $el.scrollWidth + 5
            }, 20)
        }
    },
    async mounted() {
        while(this.elements.length) {
            await new Promise(r => setTimeout(r, 13))
            this.insert(this.elements.shift())
        }
        this.reWidth()
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
