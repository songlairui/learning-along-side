# 显示树 2

> 使用作用域插槽显示 Tree

<div>
    <input v-model.number='nextNum' type='number'>
    <button @click='push'>Push one number</button>
</div>

<div class='display-wrapper'>
    <div class='display' ref='display'>
        <div style='display:flex'>
            <tree ref='tree'></tree>
        </div>
    </div>
</div>

<script>
import Tree from './Tree2.js'

export default {
    name: 'display2',
    components: { Tree },
    data() {
        return {
            nextNum: 3
        }
    },
    methods:{
        push() {
            this.$refs.tree.insert(this.nextNum)
        }
    },
    mounted() {
        this.$refs.tree.insertArray([50, 25, 75, 12, 14, 16, 37, 62, 87, 6, 18, 31, 42, 56, 70, 81, 91])
    }
}
</script>

<style scoped>
.display-wrapper {
    overflow: auto
}
.blank-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}
.display-wrapper >>> .blank { 
    padding: .2em;
    background: #ccc;
    color: #fff;
    display: inline-block;
    border-radius: .2em;
    border: thin solid #fff;
}
</style>
