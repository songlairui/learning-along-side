# ----

~~使用数组能简易转化为完全二叉堆,~~

~~对于二项式堆, 斐波那契堆, 非完全二叉堆, 数组不方便模拟~~

~~(非连续的稀疏数组,在遍历时不可避免去遍历 empty 项)~~

~~需要使用 `class heap {}` 、 `class heapNode {}` 实现堆结构~~

### 如何创建优先队列

- 创建 heap 时, 将 comparator 设置为可注入的, 能够方便的拓展 comparator 方法

[trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/blob/master/src/data-structures/priority-queue/PriorityQueue.js) 中, 对 comparator、 pairsInRightOrder 进行了两层抽象, 分别可以设置 对比器, 最大最小顺序, 此处创建带权重的优先队列, 在 comparator 中, 对权重进行比较, 即完成优先对目的. 此算法中要求 item 不能重复
