<script>
export default {
    functional: true,
    render(h, context) {
        return <div {...context.data}>{context.children}</div>;
    }
};
</script>
