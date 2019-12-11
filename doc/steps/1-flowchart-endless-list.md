# FlowChart Endless List

> 参照内容, workflowy

## 描述

见 Onenote

## Flowchart

::: details 1. 准备 Entity

```typescript
type Thought = {
  id: number
  murmur: string
  short: string
  createdAt: Date
  updatedAt: Date
  updatedBy: any
  tags: Tag[]
}

type Tag = {
  id: number
  name: string
  relations: any // TODO
}

// TODO

// fromId < toId
type TagCoRelation = {
  id: number
  fromId: number
  toId: number
  value: number
  status: string
}

type TagBiRelation = {
  id: number
  fromId: number
  toId: number
  value: number
  status: string
}
```

:::

## FlowChart

@flowstart
st=>start: Start
e=>end: End

tag=>inputoutput: Tag
record=>inputoutput: Record
relate=>operation: RelateToTag

para=>parallel: Enter

create=>subroutine: Create
list=>subroutine: List
detail=>subroutine: Detail
delete=>subroutine: Delete
update=>subroutine: Update
selectOne=>subroutine: SelectOne
selectMulti=>subroutine: selectMulti

st->list->para
para(path1,left)->create->e
para(path2,bottom)->update->e
para(path3,right)->detail->e

@flowend
