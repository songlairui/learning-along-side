# Js HeapSort 动画

<div class='preview'>
  <transition-group name="list-complete" tag="div">
    <template v-for="(items, idx) in arrObj">
        <template v-for='item in items'>
            <div :key='item.key' class="list-complete-item" :class="item.type" :style="{width: `${bitWidth * item.width}%`}">
                <div :key='item.valKey' class='item-inner'>{{ item.value }}</div>
                <div class="connect-line" v-if='idx > 0 && item.lineScale' :style='{transform: `scaleX(${(item.lineScale)})`}' @click='switchWithParent(idx)'></div>
            </div>
        </template>
    </template>
  </transition-group>
</div>

<script>
import './style.css'
import { heap, hyphenate, log2, lineId, idx2ab, getParentId, getChildIds } from './utils'
import { genShuffled } from './CONSTANTS'

export default {
    name: 'ani-heap-sort',
    data() {
        return {
            array: [],
            arrObj: []
        }
    },
    computed: {
        height() {
            if (this.arrObj.length === 0) return '-'
            return lineId(this.arrObj.length - 1) + 1
        },
        bitWidth() {
            if (this.arrObj.length === 0) return '-'
            return Math.floor(100000 / Math.pow(2, this.height - 1)) / 1000
        }
    },
    methods: {
        resetData() {
            this.arrObj = this.genArrObj(genShuffled())
        },
        switchAB(i1, i2) {
            const [a, b] = [i1, i2].map(i => this.arrObj[i].find(item => item.type==='value'));
            const [newB, newA] = [a,b].map(({key, value})=>({key, value}))
            console.info('a,b', JSON.stringify(a))
            Object.assign(a, newA)
            Object.assign(b, newB)
            console.info('a,b', JSON.stringify(a))
        },
        switchWithParent(idx) {
            const parentId = getParentId(idx)
            if (parentId < 0) return
            this.switchAB(parentId, idx)
        },
        getHeight(array) {
            return lineId(array.length - 1) + 1
        },
        genArrObj(array) {
            const height = this.getHeight(array)
            return array.map((str, idx) => {
                // 使用可计算的公式, 忽略性能
                const lastIdx = array.slice(0, idx).lastIndexOf(str)
                const key = lastIdx === -1 ? `${str}` : `${str}-${idx}`

                const [a, b] = idx2ab(idx)
                const intervalLength = Math.pow(2, height - (a + 1)) - 1
                const siderLength = intervalLength / 2
                const isFirst = b === 0
                const isLast = idx2ab(idx + 1)[1] === 0
                const isLeft = b % 2 === 0
                const lineScale = (isLeft ? 1 : -1) * ((intervalLength + .8) / 2)

                const item = [{
                    key,
                    value: str,
                    width: 1,
                    type: 'value'
                },{
                    key: `${idx}-r`,
                    width: isLast ? siderLength : intervalLength,
                    type: 'blank',
                    lineScale
                }]
                if (isFirst) {
                    item.unshift({
                        value: ' ',
                        key: `${idx}-l`,
                        width: siderLength,
                        type: 'blank'
                    })
                }
                return item
            })
        }
    },
    mounted() {
        this.resetData()
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
    left: -.8em;
    top: -.5em;
    width: 1.7em;
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
