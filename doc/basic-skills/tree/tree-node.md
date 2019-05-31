# BinaryTreeNode

```javascript
export default class BinaryTreeNode {
  left = null;
  right = null;
  parent = null;
  value = null;
  meta = {};
  nodeComparator = (a, b) => a < b;

  get leftHeight() {
    return this.left && this.left.height + 1;
  }

  get rightHeight() {
    return this.right && this.right.height + 1;
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight);
  }

  // 平衡因子
  get balanceFactor() {
    return this.leftHeight - this.rightHeight;
  }

  get uncle() {
    Assert(this.parent)
    Assert(this.parent.parent)
    Assert(this.parent.parent.(left && right) )

    // return [...this.parent.parent.children].find(item => item !== this.parent)

    const {left, right} = this.parent.parent
    return left === this.parent ? left : right
  }

  setValue(value) {
    this.value = value;
    return this;
  }

  setLeft(node) {
    // Reset parent for left node since it is going to be detached.
    const tmp = this.left
    this.left = node

    tmp && tmp.parent === this && (tmp.parent = null);
    node && (node.parent = this)

    return this;
  }

  /**
   * @param {BinaryTreeNode} node
   * @return {BinaryTreeNode}
   */
  setRight(node) {
    const tmp = this.right
    this.right = node;

    tmp && (tmp.parent === this) && (tmp.parent = null)
    node && (node.parent = this)

    return this;
  }

  /**
   * @param {BinaryTreeNode} nodeToRemove
   * @return {boolean}
   */
  removeChild(nodeToRemove) {
    return ['left', 'right'].reduce((result = false, key) => {
      if (result) return result
      if (this.nodeComparator.equal(this[key], nodeToRemove)) {
        this[key] = null
        return true
      }
    }, false)
  }

  /**
   * @param {BinaryTreeNode} nodeToReplace
   * @param {BinaryTreeNode} replacementNode
   * @return {boolean}
   */
  replaceChild(nodeToReplace, replacementNode) {
    Assert(nodeToReplace && replacementNode)

    return ['left', 'right'].reduce((result = false, key) => {
      if (result) return result
      if (this.nodeComparator.equal(this[key], nodeToReplace)) {
        this[key] = nodeToReplace
        return true
      }
    }, false)
  }

  /**
   * @param {BinaryTreeNode} sourceNode
   * @param {BinaryTreeNode} targetNode
   */
  static copyNode(sourceNode, targetNode) {
    targetNode.setValue(sourceNode.value);
    targetNode.setLeft(sourceNode.left);
    targetNode.setRight(sourceNode.right);
  }
  
  traverseInOrder() {
    let traverse = [];

    // Add left node.
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder());
    }

    // Add root.
    traverse.push(this.value);

    // Add right node.
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder());
    }

    return traverse;
  }

  /**
   * @return {string}
   */
  toString() {
    return this.traverseInOrder().toString();
  }
}
```
