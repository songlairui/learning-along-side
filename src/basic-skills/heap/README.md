# 堆

数据结构'堆(heap)'

堆的排列形式: 一个节点向下分叉为两个节点

堆中元素的索引排列方式,自左而右,自上而下.

<div class='input'><textarea v-model='arr'></textarea></div>

<div class='preview'>
    <div class='line' v-for='(line, idx) in array' :key='idx'>
        <div class='item' :class="{marking: idx === marking[0] && i === marking[1]}" v-for='(item, i) in line' :key='i' @click='toggleMark([idx, i])'><span class='inner'>{{ item }}</span></div>
        <div class='blank' v-if='idx === array.length - 1' :style='calcHolder(idx, line.length)'/>
    </div>
</div>

<script>
import { heap } from './utils'
export default {
    data() {
        return {
            arr: '0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20',
            marking: [-1,-1]
        }
    },
    computed:{
        array() {
            let arrs
            try {
                 arrs = heap(this.arr.trim().split(/[\s,\-]+/))
            } catch (e) {
                arrs = []
            }
            return arrs
        }
    },
    methods: {
        calcHolder(lineIdx, lineLength) {
            const flex = Math.pow(2, lineIdx) - lineLength
            return {flex}
        },
        toggleMark([line, item]) {
            this.marking = [line,item]
        }
    }
}
</script>
<style>
.input,
.preview{
    margin-top: 2em;
    max-width: 540px;
    background: #f2f2f2;
    padding: .5em;
    border-radius: .5em;
}
.input {
    border: thin dashed #ddd;
}
.input::before{
    content: '请输入:(空格分割)';
    font-size: .5em;
    color: silver
}
.input textarea {
    border: none;
    background: transparent;
    display: block;
    width: 100%;
    line-height: 2em;
    outline: none;
}
.line{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1em;
}
.item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer
}
.inner {
    display: inline-block;
    text-align: center;
    border-radius: 2px;
    background: lightcyan;
}
.item.marking,
.item:hover {
    outline: thin solid yellowgreen;
}

.item.marking .inner,
.item:hover .inner{
    background: gray;
    color: #fff;
}
</style>
