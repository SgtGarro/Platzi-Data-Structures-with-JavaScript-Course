class Node {
  constructor(value) {
    this.value = value;
    this.right = this.left = null;
  }
}
class BinaryTree {
  constructor() {
    this.root = null;
    this.length = 0;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) this.root = newNode;
    else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          } else currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          } else currentNode = currentNode.right;
        }
      }
    }
    this.length++;
    return this;
  }
  search(value, currentNode = this.root) {
    if (!currentNode) return false;
    if (value < currentNode.value) {
      return this.search(value, currentNode.left);
    } else if (value > currentNode.value) {
      return this.search(value, currentNode.right);
    } else return true;
  }
}
