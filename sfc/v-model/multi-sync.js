import { genProps } from '../utils/sfc'

export default {
  functional: true,
  render(h, context) {
    const { data, parent, props = {} } = context
    const { definition, prop } = props
    if (!definition || !prop) {
      return
    }
    const propsData = genProps(definition, prop)

    const emitObject = function(e, key) {
      const originValue = parent[prop]
      const itemValue = e.target.value
      parent.$emit(`update:${prop}`, { ...originValue, [key]: itemValue })
    }

    return (
      <div {...data}>
        <h3>{prop.toUpperCase()}</h3>
        {Object.entries(propsData).map(([key, propType]) =>
          // TODO 处理 needList
          {
            return (
              <div>
                {key} <Badge text={propType.type && propType.type.value} />:
                {propType.type.needList ? (
                  'TODO'
                ) : (
                  <input
                    value={parent[prop][key]}
                    onInput={(e) => {
                      emitObject(e, key)
                    }}
                  />
                )}
              </div>
            )
          }
        )}
        {context.children}
      </div>
    )
  }
}
