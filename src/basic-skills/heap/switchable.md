# 堆 - ADVANCE

## 可对换位置

> 根据上一节结论, 一个堆数据结构的各个参数都是可计算的  
> 可直接计算的部分, 给了堆数据结构用武之地

<div class='input'><textarea v-model='arr'></textarea></div>

<div class='preview'>
  <transition-group name="list-complete" tag="div">
    <div v-for="(item, idx) in arrObj" :key="item.key" class="list-complete-item" :class="{blank: item.blank}" :style="{width: `${bitWidth * item.width}%`}">
        <div class='item-inner'>{{ item.value }}</div>
        <!-- TODO 通过js创建 span, 设计不变的key, 使得对换位置时,连接线不需要消失 -->
        <span v-if='!item.blank && item.oriIdx > 0' class='connect-line' :style='{transform: `scaleX(${(item.lineScale)})`}' @click='switchWithParent(item.oriIdx)'></span>
    </div>
  </transition-group>
</div>

::: tip 可直接计算的特征
数组长度: {{ array.length }}  
堆的高度: {{ height }}  
单位宽度: {{ bitWidth }} %
每个节点的 位置, 宽高
:::

<!-- <span v-for="i in [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,21,34,55]" :key='i'>{{ lineId(i) }}</span> -->

## 操作 (最小堆)

::: tip 添加元素
在末尾添加一个值为 length 的元素  
跟随一个 up 操作, 保证此添加的元素到达正常的位置
:::

<div>
    <input v-model='toAdd' :placeholder='`输入要添加的元素 ${array.length}`'/>
    <button @click='addNext(toAdd)'> 添加元素 </button>
</div>

::: warning 打乱数组
将输入的数组打乱(设置为一个固定的打乱的数组)  
打乱之后, 不符合最小堆顺序.  
此时执行添加/删除/取出操作, 不能保证得到的堆顺序正确.  
需点一下 对比 按钮,以调整顺序, 再进行操作

对比所有节点: 从后向前, 为每个元素执行 `up(i)` 操作, 保证每个元素在正确位置, 堆顺序即正确
:::

<div>
    <button @click='shuffle'> 打乱数组 </button>
    <button @click='compareAll' :disabled='loading.compareAll'> 对比所有节点 </button>
</div>

::: tip 取出头部节点
将头部节点取出, 然后将数组末位项放置到头部节点. 然后对新的头部节点进行 `down()` 操作
:::

<div>
    <button @click='poll' :disabled='loading.poll'> 取出头部节点 </button>
</div>

::: tip 删除指定元素
- 查找所有要删除元素的索引 `{{ find(toRemove) }}`
:::

<div>
    <input v-model='toRemove' :placeholder='`输入要删除的元素 ${this.array[0]}`'/>
    <button @click='remove(toRemove)' :disabled='loading.remove'>remove {{toRemove}}</button>    
</div>

<div style='height:200px'></div>

<script>
import './style.css'
import { heap, hyphenate, log2, lineId, idx2ab, getParentId, getChildIds } from './utils'

const shuffled = '18 12 11 3 15 5 2 10 4 8 20 7 16 14 1 9 19 6 13 17 0'
const ordered = '0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20'

export default {
    name: 'ordered',
    data() {
        return {
            arr: ordered,
            idx2ab, lineId,
            toAdd: '',
            toRemove: '',
            loading: {
                compareAll: false,
                poll: false
            },   
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
                    lineScale: (isLeft ? 1 : -1) * ((intervalLength + .8) / 2),
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
        switchAB(i1, i2) {
            const newArray = [...this.array]
            const a = newArray[i1]
            const b = newArray[i2]
            newArray[i1] = b
            newArray[i2] = a
            this.$nextTick(() => {
                this.arr = newArray.join(' ')
            })
        },
        switchWithParent(idx) {
            const parentId = getParentId(idx)
            if (parentId < 0) return
            this.switchAB(parentId, idx)
        },
        shuffle() {
            this.arr = this.arr[0] === '0' ? shuffled : ordered
        },
        async addNext() {
            this.arr += ` ${this.toAdd === '' ? this.array.length : this.toAdd}`
            await new Promise(r => setTimeout(r, 500))
            await this.up()
        },
        async up(idx = this.array.length - 1) {
            let currentIdx = idx
            let parentIdx = getParentId(idx)
            while(parentIdx >= 0){
                const [a, b] = [currentIdx, parentIdx].map(i => this.array[i])
                if (+a < +b) {
                    this.switchAB(currentIdx, parentIdx)
                    await new Promise(r => setTimeout(r, 500))
                }
                currentIdx = parentIdx
                parentIdx = getParentId(currentIdx)
            }
        },
        async down(idx = 0) {
            const maxIdx = this.array.length - 1
            let currentIdx = idx
            let nextIdx = null
            let nextVal = null
            while(true) {
                const [leftIdx, rightIdx] = getChildIds(currentIdx)
                if (leftIdx > maxIdx) return
                const [a, b, c] = [currentIdx, leftIdx, rightIdx].map(i => +this.array[i])
                if (rightIdx <= maxIdx && b >= c) {
                    nextIdx = rightIdx
                    nextVal = c
                } else {
                    nextIdx = leftIdx
                    nextVal = b
                }
                if (a <= nextVal) {
                    return
                }
                this.switchAB(currentIdx, nextIdx)
                await new Promise(r => setTimeout(r, 500))
                currentIdx = nextIdx
            }

        },
        async compareAll() {
            this.loading.compareAll = true
            let i
            for(i = this.array.length - 1; i > 0; i--) {
                const parentId = getParentId(i)
                await this.down(parentId)
                // if (+this.array[i] < +this.array[parentId]) {
                    // console.info('i', i, parentId, this.array[i], this.array[parentId], +this.array[i]< +this.array[parentId])
                    // await this.up(i)
                // }
            }
            this.loading.compareAll = false
        },
        async poll() {
            this.loading.poll = true
            const newArray = [...this.array]
            const head = newArray[0]
            newArray[0] = newArray.pop()
            this.arr = newArray.join(' ')
            await new Promise(r => setTimeout(r, 500))
            await this.down(0)
            this.loading.poll = false
            return head
        },
        find(target) {
            return this.array.reduce((result, item, idx) => result.concat(item === target ? [idx] : []), [])
        },
        async remove(target) {
            if (target === '') target = this.array[0]
            let idxes = this.find(target)
            while(idxes.length) {
                let targetIdx = idxes.pop()
                if(targetIdx === this.array.length - 1) {
                    this.arr = this.array.slice(0, this.array.length - 1).join(' ')
                } else {
                    let newArray = [...this.array]
                    newArray[targetIdx] = newArray.pop()
                    this.arr = newArray.join(' ')
                    await new Promise(r => setTimeout(r, 500))

                    const parentIdx = getParentId(targetIdx)
                    const [left] = getChildIds(targetIdx)
                    const [a, b] = [parentIdx, targetIdx].map(i => +this.array[i])
                    const maxLength = this.array.length
                    if (left <= maxLength &&(parentIdx < 0 || a < b)){
                        await this.down(targetIdx)
                    } else {
                        await this.up(targetIdx)
                    }
                }
                await new Promise(r => setTimeout(r, 500))
                idxes = this.find(target)
            }
        }
    }
}
</script>

<style scoped>
.preview{
    position: sticky;
    top: 60px;
}
.list-complete-item {
  transition: all .4s;
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
.item-inner {
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
.blank .item-inner{
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
