class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}
class MyDoublyLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }
  append(value) {
    if (this.head == null) this.head = this.tail = new Node(value);
    else {
      const newNode = new Node(value);
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = this.tail.next;
    }
    this.length++;
    return this;
  }
  prepend(value) {
    if (this.head == null) this.head = this.tail = new Node(value);
    else {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  insert(index, value) {
    if (index >= this.length) return this.append(value);
    if (index === 0) return this.prepend(value);

    const newNode = new Node(value);
    let currentNode = this.getTheIndex(index - 1);
    newNode.next = currentNode.next;
    newNode.prev = currentNode;
    currentNode.next.prev = newNode;
    currentNode.next = newNode;
    this.length++;
    return this;
  }
  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  shift() {
    if (this.length !== 0) {
      let currentNode = this.head;
      this.head = this.head.next;
      currentNode.next = null;
      this.head.prev = null;
      this.length--;
    }
    return this;
  }
  remove(index) {
    if (index >= this.length) console.error("Index out of range");
    else {
      if (index === 0) this.shift();
      else {
        let currentNode = this.getTheIndex(index - 1);
        let deletedNode = currentNode.next;
        currentNode.next = deletedNode.next;
        deletedNode.next = null;
        currentNode.next.prev = currentNode;
        deletedNode.prev = null;
      }
      this.length--;
    }
    return this;
  }
}

let myLinkedList = new MyDoublyLinkedList();
myLinkedList.append("Hola");
myLinkedList.append("Mundo");
myLinkedList.append("!");
myLinkedList.insert(1, "Pablo");
console.log(myLinkedList.head);
myLinkedList.remove(2);
console.log(myLinkedList.head);
