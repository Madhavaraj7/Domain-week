class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  AddToFirst(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
      this.size++;
      return;
    }
  }

  AddToLast(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.size++;
      return;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.size++;
      return;
    }
  }

  insert(val, index) {
    const node = new Node(val);
    if (index < 0 || index >= this.size) {
      return false;
    }
    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this.size++;
      return;
    }
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    // 10 20 30 40  =>50
    // 0  1  2  3
    node.next = curr.next;
    curr.next = node;
    this.size++;
    return;
  }

  removeFromIndex(index) {
    if (index < 0 || index >= this.size) {
      return undefined;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    } else {
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
      return;
    }
  }

  removeValue(val) {
    if (!this.size === 0) {
      return undefined;
    }

    if (this.head.val === val) {
      this.head = this.head.next;
      this.size--;
      return;
    }
  }

  print() {
    if (this.size > 0) {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.val} `;
        curr = curr.next;
      }
      console.log(listValues);
    } else {
      console.log("list is empty");
    }
  }
}

const list = new LinkedList();
list.AddToFirst(10);
list.AddToFirst(20);
list.AddToFirst(30);
list.AddToFirst(40);
list.AddToFirst(50);
list.insert(22, 3);
list.removeFromIndex(4);
list.print();
