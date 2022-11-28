class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class MyStack {
  constructor() {
    this.top = this.bottom = null;
    this.length = 0;
  }
  peek() {}
  pop() {}
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) this.top = this.bottom = newNode;
    else {
      newNode.next = this.top;
      this.top = newNode;
    }
    this.length++;
    return this;
  }
}

let myStack = new MyStack();
myStack.push("Hola");
myStack.push("Mundo");
console.log(myStack.top);
