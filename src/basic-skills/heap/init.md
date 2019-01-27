# 观察索引

> 学习堆的数据结构时, 对于取 idx 的代数式比较迷惑, 遂作此文档页  
> 演示了, 将数字排列成堆、 由选中节点取父节点、子节点、归纳 idx 规律

::: warning
根据定义满足堆序性的, 才能称之为堆.
此处 ‘无序二叉堆’ 实际为构建堆之前的状态

本章节仅用于认识父子节点索引值的计算规律是确定的, 不需要遍历的

:::

数据结构'堆(heap)'

堆的排列形式: 一个节点向下分叉为两个节点

堆中元素的索引排列方式,自左而右,自上而下.

## Play Ground

> 点击选中节点, 显示索引信息

<div class='input'><textarea v-model='arr'></textarea></div>

<div class='preview'>
    <div class='line' v-for='(line, idx) in array' :key='idx'>
        <div class='item' :class="itemStyleGentor([idx, i])" v-for='(item, i) in line' :key='i' @click='toggleMark([idx, i])'><span class='item-inner'>{{ item }}</span></div>
        <div class='blank' v-if='idx === array.length - 1' :style='calcHolder(idx, line.length)'/>
    </div>
</div>

| -         |       排(索引)        |                         列(索引) |                                               总(索引) |
| --------- | :-------------------: | -------------------------------: | -----------------------------------------------------: |
| 当前选中  |  {{ t(marking[0]) }}  |              {{ t(marking[1]) }} |                                 {{ calcIdx(marking) }} |
|           |                       |                                  |              calcIdx([{{marking[0]}}, {{marking[1]}}]) |
| 父节点    | {{ t(marking[0]-1) }} | {{ t(idxDivideTwo(marking[1]))}} | {{ calcIdx([marking[0]-1,idxDivideTwo(marking[1])]) }} |
|           |    [选中索引] - 1     |         idxDivideTwo([选中索引]) |                                      calcIdx([排, 列]) |
| 子节点-左 |   {{ marking[0]+1}}   |             {{ marking[1] * 2 }} |           {{ calcIdx([marking[0]+1,marking[1] * 2]) }} |
|           |    [选中索引] + 1     |                  [选中索引] \* 2 |                                      calcIdx([排, 列]) |
| 子节点-右 |  {{ marking[0]+1 }}   |          {{ marking[1] * 2 + 1}} |         {{ calcIdx([marking[0]+1,marking[1] * 2]) +1}} |
|           |    [选中索引] + 1     |                 [选中索引] \*2+1 |                                      calcIdx([排, 列]) |

::: tip
表格中用到的方法  
根据位置计算总索引: calcIdx = ([a,b]) => Math.pow(2, a) - 1 + b  
计算父级节点在排内索引: idxDivideTwo = idx => Math.floor(idx / 2)  
计算父级节点在排内索引(方式 2): idxDivideTwo2 = idx =>Math.ceil((idx - 1) / 2)
:::

## 索引规律

由选中节点到子节点, 排索引 + 1, 相当于总索引 乘 2 加 1  
所以, 由选中节点求子节点索引, 排、列索引的变化,相当于总索引 x 2 + 1  
即: `getLeftChildIdx = idx => idx * 2 + 1`  
于是, `getRightChildIdx = idx => getLeftChildIdx(idx) + 1`

同理, 由选中节点到父节点, 排索引 - 1, 相当于总索引 减 1 ,再除以 2, 列索引 除以 2 取 floor  
排、列索引的变化,相当于(总索引 - 1)/2 再取 floor  
于是, `getParentIdx = idx => Math.floor((idx - 1) / 2)`, [手动归纳以验证]

<script>
import './style.css'
import { heap, hyphenate } from './utils'

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
        },
        current() {
            const [a,b] = this.marking
            const idx = Math.pow(2, a) + b - 1
            return {
                idx: idx < 0 ? '-':idx
            }
        },
        parentNode() {
            const [a,b] = this.marking
            return [a-1, this.idxDivideTwo(b)]
        },
        leftChildNode() {
            const [a,b] = this.marking
            return [a+1, b*2]
        },
        rightChildNode() {
            const [a,b] = this.marking
            return [a+1, b*2+1]
        }
    },
    methods: {
        calcHolder(lineIdx, lineLength) {
            const flex = Math.pow(2, lineIdx) - lineLength
            return {flex}
        },
        toggleMark([line, item]) {
            this.marking = [line,item]
        },
        calcIdx([idx, i]){
            return Math.pow(2, idx) - 1 + i 
        },
        idxDivideTwo(idx) {
            return Math.floor(idx / 2)
        },
        idxDivideTwo2(idx) {
            return Math.ceil((idx - 1) / 2)
        },
        t(idx) {
            if(idx < 0) return '无'
            return idx
        },
        itemStyleGentor([idx, i]) {
            const style = {};
            const vm = this;
            ['marking', 'parentNode','leftChildNode','rightChildNode'].forEach(key => {
                const [a, b] = vm[key]
                style[hyphenate(key)] = a === idx && b === i
            })
            return style
        }
    }
}
</script>
<style scoped>
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
.item-inner {
    display: inline-block;
    text-align: center;
    border-radius: 2px;
    background: lightcyan;
}
.item.marking,
.item:hover {
    outline: thin solid yellowgreen;
}

.item.marking .item-inner,
.item:hover .item-inner{
    background: gray;
    color: #fff;
}
.info{
    white-space: pre-wrap
}
.parent-node .item-inner{
    background: lightgray;
    color: #fff;
}

.left-child-node .item-inner{
    background: darkgray;
    color: #fff;
}
.right-child-node .item-inner{
    background: darkgray;
    color: #fff;
}
</style>
