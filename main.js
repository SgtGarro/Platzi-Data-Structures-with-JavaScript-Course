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
let myQueue = new MyQueue();
myQueue.enqueue("Hola");
myQueue.enqueue("Mundo");
console.log("Enqueue", myQueue.first);
myQueue.dequeue();
console.log("Dequeue", myQueue.first);
myQueue.enqueue("Hola");
const peekedItem = myQueue.peek();
console.log("Peeked Item", peekedItem);
console.log("Peek Queue", myQueue.first);
