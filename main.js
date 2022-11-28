class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }
  pop() {
    if (this.length === 0) return;
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);
    return item;
  }
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  unshift(item) {
    if (!item) return this.length;
    for (let i = this.length; i > 0; i--) this.data[i] = this.data[i - 1];
    this.data[0] = item;
    this.length++;
    return this.length;
  }
  shift() {
    if (this.length === 0) return undefined;
    const item = this.data[0];
    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    return item;
  }
}
const myArray = new MyArray();
// myArray.push("Jose");
// myArray.push("Ana");
// console.log(myArray.get(0));
// const lastItem = myArray.pop();
// console.log("POP", lastItem);
// console.log(myArray.data);
// myArray.push("Ana");
// myArray.push("Oscar");
// console.log(myArray.data);
// const deletedItem = myArray.delete(1);
// console.log("Deleted:", myArray.data);
// console.log("Item deleted:", deletedItem);
myArray.push("Jose");
myArray.push("Ana");
console.log("Normal array", myArray.data);
myArray.unshift("Oscar");
console.log("Unshifted array", myArray.data);
