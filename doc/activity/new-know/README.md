# 新知道

<div>
    <input v-model='things'/>
    <button @click='mark'>mark</button>
    <ul>
        <li v-for='(item, idx) in list' :key='idx'>
            <span class='title'>{{ item.title }}</span>
            <span class='stamp'>{{ new Date(item.stamp).toLocaleString() }}</span>
            <span class='del' @click='delMe(idx)'>x</span>
        </li>
    </ul>
</div>

<script>
export default {
    name: 'new-know',
    data() {
        return {
            things: '',
            list: [],
        }
    },
    methods: {
        mark() {
            this.list.push({title: this.things, stamp: +new Date()})
        },
        delMe(idx) {
            this.list.splice(idx, 1)
        },
        snap() {
            localStorage.setItem('things', JSON.stringify(this.list))
        }
    },
    mounted() {
        try {
            this.list = JSON.parse(localStorage.getItem('things')).filter(item => item.title)
        } catch(e) {
            //
        }
    },
    beforeDestory() {
        console.warn('snap')
    }
}
</script>
<style>
.stamp {
    font-size: .7em;
    color: gray
}
.del {
    cursor: pointer
}
</style>
