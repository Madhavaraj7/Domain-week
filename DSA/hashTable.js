class hashtable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let index = 0;
    for (let i = 0; i < key.length; i++) {
      index += key.charCodeAt(i);
    }
    return index % this.size;
  }

  set(key, val) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      this.table[index] = [[key, val]];
    } else {
      const item = bucket.find((item) => item[0] === key);
      if (item) {
        item[i] = val;
      } else {
        bucket.push([key, val]);
      }
    }
  }
  removed(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      return undefined;
    } else {
      const item = bucket.find((item) => item[0] === key);
      if (item) {
        bucket.splice(bucket.indexOf(item), 1);
      }
    }
  }

  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new hashtable(50);

table.set("name", "Madhav");
table.set("age", 22);
table.print();
table.removed("age")
table.print()