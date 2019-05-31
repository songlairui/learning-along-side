<!-- JSX 版透传 -->
<script>
export default {
    functional: true,
    render(h, context) {
        return <div {...context.data}>{context.children}</div>;
    }
};
</script>
