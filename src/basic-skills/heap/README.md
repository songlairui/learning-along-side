# 堆 - 介绍

> 堆（英语：Heap）是计算机科学中的一种特别的树状数据结构。若是满足以下特性，即可称为堆：“给定堆中任意节点 P 和 C，若 P 是 C 的母节点，那么 P 的值会小于等于（或大于等于） C 的值”。若母节点的值恒小于等于子节点的值，此堆称为最小堆（英语：min heap）；反之，若母节点的值恒大于等于子节点的值，此堆称为最大堆（英语：max heap）。在堆中最顶端的那一个节点，称作根节点（英语：root node），根节点本身没有母节点（英语：parent node）。

> 堆始于 J.\_W.\_J.\_Williams 在 1964 年发表的堆排序（英语：heap sort），当时他提出了二叉堆树作为此算法的数据结构。堆在戴克斯特拉算法（英语：Dijkstra's algorithm）中亦为重要的关键。

> 在队列中，调度程序反复提取队列中第一个作业并运行，因为实际情况中某些时间较短的任务将等待很长时间才能结束，或者某些不短小，但具有重要性的作业，同样应当具有优先权。堆即为解决此类问题设计的一种数据结构。

- [堆 - 无序](./init.md) 创建一个堆

推算其中父子节点索引值的计算代数式

- [堆 - 最小堆(动画)](./animated.md) 操作一个堆

移动堆中节点的位置, 保证堆序性

## 性质

- 任意节点小于（或大于）它的所有后裔，最小元（或最大元）在堆的根上（堆序性）。
- 堆总是一棵完全树。即除了最底层，其他层的节点都被元素填满，且最底层尽可能地从左到右填入。

## 术语

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
