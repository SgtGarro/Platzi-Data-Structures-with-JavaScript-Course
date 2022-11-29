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
  enqueue(value) {
    if (this.length === 0) this.first = this.last = new Node(value);
    else {
      this.last.next = new Node(value);
      this.last = this.last.next;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (this.length !== 0) this.first = this.first.next;
    this.length--;
    return this;
  }
  peek() {
    const peekedItem = this.first;
    this.dequeue();
    peekedItem.next = null;
    return peekedItem;
  }
}
