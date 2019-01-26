---
sidebar: true
---

# 堆 - 有序

> 以最后一行为

<div class='input'><textarea v-model='arr'></textarea></div>

::: tip
数组长度: {{ array.length }}  
堆的高度: {{ height }}  
单位宽度: {{ bitWidth }} %
:::

<div class='preview'>
  <transition-group name="list-complete" tag="div">
    <div v-for="(item, idx) in arrObj" :key="item.key" class="list-complete-item" :class="{blank: item.blank}" :style="{width: `${bitWidth * item.width}%`}">
        <div class='inner'>{{ item.value }}</div>
        <span v-if='!item.blank && item.oriIdx > 0' class='connect-line' :style='{transform: `scaleX(${(item.lineScale)})`}' @click='switchWithParent(item.oriIdx)'></span>
    </div>
  </transition-group>
</div>

<!-- <span v-for="i in [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,21,34,55]" :key='i'>{{ lineId(i) }}</span> -->

<script>
import './style.css'
import { heap, hyphenate, log2, lineId, idx2ab, getParentId } from './utils'

export default {
    name: 'ordered',
    data() {
        return {
            arr: '0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20',
            idx2ab, lineId
        }
    },
    computed: {
        array() {
            try {
                const raw = this.arr.trim()
                if (!raw) return []
                return raw.split(/[\s,\-]+/)
            } catch (e) {
                return []
            }
        },
        heap() {
            return heap(this.array)
        },
        height() {
            if (this.array.length === 0) return '-'
            return lineId(this.array.length - 1) + 1
        },
        bitWidth() {
            if (this.array.length === 0) return '-'
            return Math.floor(100000 / Math.pow(2, this.height - 1)) / 1000
        },
        arrObj() {
            if (this.array.length === 0) return []
            return this.array.map((str, idx) => {
                // 使用可计算的公式, 忽略性能
                const lastIdx = this.array.slice(0, idx).lastIndexOf(str)
                const key = lastIdx === -1 ? str : `${str}-${idx}`

                const [a, b] = idx2ab(idx)
                const intervalLength = Math.pow(2, this.height - (a + 1)) - 1
                const siderLength = intervalLength / 2
                const isFirst = b === 0
                const isLast = idx2ab(idx + 1)[1] === 0
                const isLeft = b % 2 === 0

                const item = [{
                    key,
                    value: str,
                    width: 1,
                    lineScale: (isLeft ? 1 : -1) * ((intervalLength + 1) / 2),
                    oriIdx: idx
                },{
                    value: ' ',
                    key: `${idx}-r`,
                    width: isLast ? siderLength : intervalLength,
                    blank: !0
                }]
                if (isFirst) {
                    item.unshift({
                        value: ' ',
                        key: `${idx}-l`,
                        width: siderLength,
                        blank: !0
                    })
                }
                return item
            }).reduce((result, item) => result.concat(item), [])
        }
    },
    methods: {
        switchWithParent(idx) {
            const parentId = getParentId(idx)
            const newArray = [...this.array]
            const a = newArray[parentId]
            const b = newArray[idx]
            newArray[parentId] = b
            newArray[idx] = a
            this.$nextTick(() => {
                this.arr = newArray.join(' ')
            })
        }
    }
}
</script>

<style>
.list-complete-item {
  transition: all 1s;
  display: flex;
  min-height: 1.4em;
  height: 1.4em;
  line-height: 1.4em;
  float: left;
  justify-content: center;
  align-items: center;
  padding: .5em 0;
  position: relative
}
.inner {
  border-radius: 5px;
  box-shadow:inset 0 0 1px #333;
  cursor: pointer;
  min-width: 1.5em;
  text-align: center;
  position: relative
}
.list-complete-move .connect-line{
    display: none;
}
.connect-line{
    position: absolute;
    left: 50%;
    top: -.5em;
    width: 100%;
    height: 1em;
    transform-origin: left;
}
.connect-line:hover{
    cursor: pointer
}
.connect-line::before{
    content: '';
    display: block;
    position: absolute;
    background: red;
    width: 100%;
    height: 100%;
    clip-path: polygon(99% 0, 100% 1%, 1% 100%, 0 99%);
}
.connect-line:hover::before{
    background: blue;
}
.blank .inner{
  box-shadow:none;
  cursor: default;
}

.list-complete-enter, .list-complete-leave-to
/* .list-complete-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
.preview > div{
    overflow: hidden
}
</style>
