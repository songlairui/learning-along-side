<!-- h函数 版透传 -->
<script>
export default {
    functional: true,
    render(h, context) {
        return h("div", context.data, context.children);
    }
};
</script>
