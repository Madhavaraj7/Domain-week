class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
  }
  
  class DoublyLinkdeList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.size = 0;
      return;
    }
  
    AddtoFirst(val) {
      const node = new Node(val);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
      }
      this.size++;
      return;
    }
  
    AddtoLast(val) {
      const node = new Node(val);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
      this.size++;
      return;
    }
  
    insert(val, index) {
      const node = new Node(val);
      if (index < 0 || index > this.size) {
        return undefined;
      }
  
      if (index === 0) {
        this.head.prev = node;
        node.next = this.head;
        this.head = node;
        this.size++;
        return;
      }
  
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      node.next = curr.next;
      node.prev = curr;
      curr.next.prev = node;
      curr.next = node;
      this.size++;
      return;
    }
  
    removeFromIndex(index) {
      if (index < 0 || index > this.size) {
        return undefined;
      }
      if (index === 0) {
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return;
      }
  
      let curr = this.head;
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next;
      }
      curr.next = curr.next.next;
      // console.log("he;llo",curr.next.prev);
      if (curr === this.tail) {
        curr.next = this.tail;
      }
      // curr.next.prev = curr;
      this.size--;
      return;
    }
  
    removeFromValue(val) {
      if (this.head.val === val) {
        this.head = this.head.next;
        this.head.prev = null;
        this.size--;
        return;
      }
  
      let curr = this.head;
  
      while (curr && curr.val !== val) {
        curr = curr.next;
      }
      if (curr) {
        if (curr.next) {
          curr.next.prev = curr.prev;
        } else {
          this.tail = curr.prev;
        }
        if (curr.prev) {
          curr.prev.next = curr.next;
        }
      }
      this.size--;
      return;
    }
  
    reverse() {
      let curr = this.head;
      let temp = null;
      while (curr) {
        temp = curr.prev;
        curr.prev = curr.next;
        curr.next = temp;
        curr = curr.prev;
      }
      if (temp !== null) {
        this.head = this.prev;
        this.head = temp.prev;
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
  
  const list = new DoublyLinkdeList();
  
  list.AddtoFirst(10);
  list.AddtoFirst(2);
  list.AddtoFirst(23);
  list.AddtoFirst(21);
  list.AddtoFirst(43);
  list.print();
  list.AddtoLast(33);
  console.log(list);
  list.print();
  
  list.insert(22, 5);
  console.log(list);
  
  list.print();
  list.removeFromIndex(6);
  console.log(list);
  
  list.print();
  list.removeFromValue(22);
  list.print();
  list.reverse();
  list.print();
  