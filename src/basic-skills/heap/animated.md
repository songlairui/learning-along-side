# 最小堆 (动画)

> 根据上一节结论, 一个堆数据结构的各个参数都是可计算的  
> 可直接计算的部分, 支撑了动画效果实现

## Play Ground

> 点击连接线,对换两节点位置 (+过渡动画)

<div class='preview'>
  <transition-group name="list-complete" tag="div">
    <div v-for="(item, idx) in arrObj" :key="item.key" class="list-complete-item" :class="{blank: item.blank}" :style="{width: `${bitWidth * item.width}%`}">
        <div class='item-inner'>{{ item.value }}</div>
        <!-- TODO 通过js创建 span, 设计不变的key, 使得对换位置时,连接线不需要消失 -->
        <span v-if='!item.blank && item.oriIdx > 0' class='connect-line' :style='{transform: `scaleX(${(item.lineScale)})`}' @click='switchWithParent(item.oriIdx)'></span>
    </div>
  </transition-group>
</div>

{{ arr }}

::: tip 可直接计算的特征
数组长度: {{ array.length }}  
堆的高度: {{ height }}  
单位宽度: {{ bitWidth }} %
每个节点的 位置, 宽高
:::

<!-- <span v-for="i in [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,21,34,55]" :key='i'>{{ lineId(i) }}</span> -->

## 添加元素

::: tip 在末尾添加一个值为 length 的元素  
跟随一个 up 操作, 保证此添加的元素到达正常的位置
:::

<div>
    <input v-model='toAdd' :placeholder='`输入要添加的元素 ${array.length}`'/>
    <button @click='addNext(toAdd)'> 添加元素 </button>
</div>

## 打乱数组
::: warning 将输入的数组打乱(设置为一个固定的打乱的数组)  
打乱之后, 不符合最小堆顺序.  
此时执行添加/删除/取出操作, 不能保证得到的堆顺序正确.  
需点一下 对比 按钮,以调整顺序, 再进行操作

对比所有节点: 从后向前, 为每个元素执行 `up(i)` 操作, 保证每个元素在正确位置, 堆顺序即正确
:::

<div>
    <button @click='shuffle'> 打乱数组 </button>
    <button @click='compareAll' :disabled='loading.compareAll'> 对比所有节点 </button>
</div>

## 取出头部节点

::: tip
将头部节点取出, 然后将数组末位项放置到头部节点. 然后对新的头部节点进行 `down()` 操作
:::

<div>
    <button @click='poll' :disabled='loading.poll'> 取出头部节点 </button>
</div>

## 删除指定元素

::: tip 
- 查找所有要删除元素的索引 `{{ find(toRemove) }}`
:::

<div>
    <input v-model='toRemove' :placeholder='`输入要删除的元素 ${this.array[0]}`'/>
    <button @click='remove(toRemove)' :disabled='loading.remove'>remove {{toRemove}}</button>    
</div>

## FEELING

### 连续点击 poll

取出头部节点, 后续的操作, 确保了:
 - 根节点是整个堆最小的值, 
 - 除了跟节点之外最小的值,在其左右两个子节点中

据此归纳可知, poll 操作能够稳定的从头部节点获取最小值

### 连续 remove 非头部节点

取出节点之后, 将末位项放置在当前位置  
当前位置比父节点大时, 向下对比, 此场景跟连续点击poll一致.
当前位置比父节点小时, 向上对比. 
    其中第一步操作是与第一级父节点对换. 因为此前堆满足堆顺序, 所以对换之后的节点必然保证此节点一下的堆, 满足堆顺序. 必须要逐个再对比

由此向上递归, 当遇到比父节点小时, 必然发生父节点下移一级(下移一级, 是保证堆顺序的),   
每一次对换, 都保证被对换的节点下方堆顺序满足, 于是全程无需执行 `down(idx)`

当不比父节点小时, 递归停止, 堆顺序调整完成

### 省力的地方在哪儿?

一、在 '连续点击poll' 处的两处保证  
二、节点只与其**亲兄弟**保证堆顺序, 而不与其**堂兄弟节点**保证顺序.  
这点儿不保证,使得省力.  

::: tip 妙处
这点儿不保证,不影响使用吗, 或者这点不保证的顺序是如何被摒除的?  
因为到了根节点之后, 一级子节点没有‘堂兄弟节点’, 不会遭遇取值时顺序不确定的场景
:::

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
