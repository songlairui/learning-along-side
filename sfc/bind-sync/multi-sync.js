export default {
  functional: true,
  render(h, context) {
    const { data, listeners, parent } = context
    const syncTargets = Object.keys(listeners)
      .filter((fnName) => fnName.startsWith('update:'))
      .map((str) => str.slice(7))

    return (
      <div {...data}>
        {syncTargets.map((key) => (
          <div>
            {key}:
            <input
              value={data.attrs[key]}
              onInput={(e) => {
                parent[key] = e.target.value
              }}
            />
          </div>
        ))}
      </div>
    )
  }
}
