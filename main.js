class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class MyQueue {
  constructor() {
    this.first = this.last = null;
    this.length = 0;
  }
  enqueue(value) {}
  dequeue() {}
  peek() {}
}
