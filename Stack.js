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
  peek() {
    const item = this.top;
    this.pop();
    item.next = null;
    return item;
  }
  pop() {
    if (this.length !== 0) {
      if (this.top == this.bottom) this.top = this.bottom = null;
      else this.top = this.top.next;
    }
    return this;
  }
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
