const filters = {
  ListType: '[ ]',
  NonNullType: ' ! ',
  NamedType: ' '
}

const filterType = (str) => filters[str] || str

const TypeDefine = (context) => {
  const { kind, type, name } = context.props.type || {}
  // TODO 使用递归,判断 NamedType
  const { value = '·' } = (type && type.name) || type || name || {}
  return (
    !!kind && (
      <span>
        <Badge type="warn" text={filterType(kind)} />
        <Badge text={value} />
      </span>
    )
  )
}
const TitleLine = (context) => {
  const { definition = {} } = context.props
  const {
    name = {},
    interfaces = [],
    directives = [],
    arguments: args = [],
    kind
  } = definition
  const badges = { interfaces, directives, args }
  return (
    <span>
      {name.value} {name.value && ' : '}{' '}
      <Badge text={kind.replace('Definition', '')} vertical="middle" />
      {Object.entries(badges).map(([key, value]) => {
        !!value.length && <Badge text={`${key} ${value.length}`} />
      })}
    </span>
  )
}

const Item = (context) => {
  const { definition = {} } = context.props
  const { fields = [], definitions = [], type = {} } = definition
  switch (definition.kind) {
    case undefined:
    case false:
      return <Badge vertical="middle" text="NO DEINITION" type="error" />
    default:
  }
  const subItems = fields.length ? fields : definitions

  return subItems.length ? (
    <details open>
      <summary>
        <TitleLine definition={definition} />
      </summary>
      <ul>
        {subItems.map((child) => (
          <li>
            <Item definition={child} />
          </li>
        ))}
      </ul>
    </details>
  ) : (
    <div>
      <TitleLine definition={definition} />
      <TypeDefine type={type} />
    </div>
  )
}

export default {
  props: {
    definition: {
      default: () => ({})
    }
  },
  render() {
    return <Item definition={this.definition} />
  }
}
