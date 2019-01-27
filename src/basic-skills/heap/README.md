# 从 0 尝试

## 使用数组模拟堆

::: tip 使用数组模拟堆  
将数组从前往后,从上倒下排列成一个堆, 构成一个无序的完全二叉堆, 是最直观的转化方式
:::

- [堆 - 无序](./init.md) 创建一个堆

推算其中父子节点索引值的计算代数式

- [堆 - 最小堆(动画)](./animated.md) 操作一个堆

移动堆中节点的位置, 保证堆序性

## 术语 

> from Wikipedia

- 上滤

  为将元素 X 插入堆中，找到空闲位置，创建一个空穴，若满足堆序性，则插入完成；
  否则将父节点元素装入空穴，删除该父节点元素，完成空穴上移。直至满足堆序性。

  [堆 - 最小堆(动画)](./animated.md) 中,添加一个 0 到末尾, 会触发此策略

- 下滤

  删除根或父节点后，队列最后一个元素必须移动到堆得某个位置，使得堆仍然满足堆序性质。

  [堆 - 最小堆(动画)](./animated.md) 中,poll 或者 删除一个非末排元素时, 会触发此策略

## 参考链接

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/heap)
  [zh](https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md)

- [wikipedia/data_structure](<https://en.wikipedia.org/wiki/Heap_(data_structure)>) [zh](https://zh.wikipedia.org/wiki/%E5%A0%86%E7%A9%8D)

## 相关

- [堆排序](./sort.md)
- [二项式堆]()
- [二叉堆]()
- [斐波那契堆]()
