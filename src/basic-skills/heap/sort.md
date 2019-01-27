# 堆排序

> 堆排序, 听名字应该是与数据结构堆有关.  
> 使用 js 模拟了一遍堆的创建,添加,删除节点, 连续取根节点即可完成排序.  
> 但这需要经过一个构建堆,逐个添加所有节点,逐个取根节点,两遍过程,感受不到算法复杂度的稳定

## 参考 trekhleb/javascript-algorithms

链接: [HeapSort.js](https://github.com/trekhleb/javascript-algorithms/blob/master/src/algorithms/sorting/heap-sort/HeapSort.js)

```js {4,8,14}
export default class HeapSort extends Sort {
  sort(originalArray) {
    const sortedArray = [];
    const minHeap = new MinHeap(this.callbacks.compareCallback);
    // Insert all array elements to the heap.
    originalArray.forEach((element) => {
      this.callbacks.visitingCallback(element);
      minHeap.add(element);
    });
    while (!minHeap.isEmpty()) {
      const nextMinElement = minHeap.poll();
      this.callbacks.visitingCallback(nextMinElement);

      sortedArray.push(nextMinElement);
    }

    return sortedArray;
  }
}
```

## 原地堆排序

操作 array [0~end], 将最小值放在最前
操作 array [1 ~ end], ... 循环操作

## wikipedia js 实现

[wikipedia](https://zh.wikipedia.org/wiki/%E5%A0%86%E6%8E%92%E5%BA%8F#JavaScript)

改为了 call 方式调用

```javascript
heap_sort = function() {
	var arr = this.slice(0);
	function swap(i, j) {
		var tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}

	function max_heapify(start, end) {
		//建立父節點指標和子節點指標
		var dad = start;
		var son = dad * 2 + 1;
		if (son >= end)//若子節點指標超過範圍直接跳出函數
			return;
		if (son + 1 < end && arr[son] < arr[son + 1])//先比較兩個子節點大小，選擇最大的
			son++;
		if (arr[dad] <= arr[son]) {//如果父節點小於子節點時，交換父子內容再繼續子節點和孫節點比較
			swap(dad, son);
			max_heapify(son, end);
		}
	}

	var len = arr.length;
	//初始化，i從最後一個父節點開始調整
	for (var i = Math.floor(len / 2) - 1; i >= 0; i--)
		max_heapify(i, len);
	//先將第一個元素和已排好元素前一位做交換，再從新調整，直到排序完畢
	for (var i = len - 1; i > 0; i--) {
		swap(0, i);
		max_heapify(0, i);
	}

	return arr;
};
var a = [3, 5, 3, 0, 8, 6, 1, 5, 8, 6, 2, 4, 9, 4, 7, 0, 1, 8, 9, 7, 3, 1, 2, 5, 9, 7, 4, 0, 2, 6];
console.log(heap_sort.call(a));
```

其中没有了遍历 add 的部分, 替代的方式是, 从最后一个父节点开始向前进行下滤(我实现的部分,是从最后一个子节点向前进行上滤, 步数会多一些)

[转化为动画](./sort-animated.md)
