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

const myTree = new BinaryTree();
myTree.insert(10);
myTree.insert(4);
myTree.insert(20);
myTree.insert(2);
myTree.insert(17);
console.log("Root", myTree.root);
console.log("'2' Founded?", myTree.search(2));
console.log("'17' Founded?", myTree.search(17));
