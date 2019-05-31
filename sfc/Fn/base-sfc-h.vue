<script>
// 模拟 sfc 版, 补充不等效部分
export default {
    functional: true,
    render(h, context) {
        const children = [];
        Object.values(context.slots()).forEach(items => {
            children.push(...items);
        });
        return h(
            "div",
            {
                ...context.data,
                on: context.data.on
            },
            children
        );
    }
};
</script>
