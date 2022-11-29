class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class MySingleLinkedList {
  constructor() {
    this.head = this.tail = null;
    this.length = 0;
  }
  append(value) {
    if (this.head == null) this.head = this.tail = new Node(value);
    else {
      this.tail.next = new Node(value);
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
      this.head = this.head.next;
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
      }
      this.length--;
    }
    return this;
  }
}
