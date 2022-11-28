class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++)
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    return hash;
  }
  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) this.data[address] = [];
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++)
        if (currentBucket[i][0] === key) return currentBucket[i][1];
    }
    return undefined;
  }
  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          const item = currentBucket[i];
          currentBucket.splice(i, 1);
          return item;
        }
      }
    }
    return undefined;
  }
  getAllKeys() {
    const keys = this.data
      .filter((currentBucket) => {
        return currentBucket != undefined;
      })
      .flat()
      .map((item) => item[0]);
    return keys;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("Diego", 1990);
myHashTable.set("Mariana", 1998);
myHashTable.set("Alejandra", 2000);
console.log(myHashTable.data);
let person = myHashTable.get("Mariana");
console.log("Mariana", person);
person = myHashTable.get("Diego");
console.log("Diego", person);

const itemDeleted = myHashTable.delete("Diego");
console.log(myHashTable.data);
console.log("Item deleted", itemDeleted);
console.log(myHashTable.getAllKeys());
