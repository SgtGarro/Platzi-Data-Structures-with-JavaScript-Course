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
}

let myLinkedList = new MySingleLinkedList();
myLinkedList.append("Hola");
myLinkedList.append("Mundo");
myLinkedList.append("!");
myLinkedList.prepend(":3");
console.log(myLinkedList.head);
