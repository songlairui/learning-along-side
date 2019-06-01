const genObjectTypeProp = function(definition) {
  const { fields = [] } = definition
  const props = {}
  fields.forEach((field) => {
    const prop = {}

    props[field.name.value] = prop

    let type = field.type
    const isList = type.kind === 'ListType'
    if (isList) {
      type = type.type
    }
    const isNonNull = type.kind === 'NonNullType'
    if (isNonNull) {
      prop.required = true
      type = type.type
    }
    while (type.kind !== 'NamedType') {
      type = type.type
    }
    // FIX: 未浅拷贝时因整个树都在使用type.name, 修改 type.name 造成死循环
    prop.type = {
      ...type.name,
      ...(isList
        ? {
            needList: true,
            value: `${type.name.value} []`
          }
        : {})
    }
  })
  return props
}
export const genProps = function(schema, key) {
  const definition = schema.definitions.find(
    (definition) => definition.name.value.toLowerCase() === key.toLowerCase()
  )
  if (!definition) {
    return {}
  }
  switch (definition.kind) {
    case 'ObjectTypeDefinition':
    default:
      return genObjectTypeProp(definition)
  }
}
