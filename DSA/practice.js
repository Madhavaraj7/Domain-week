class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    let A = this.heap;
    A.push(val);

    let i = A.length - 1;
    while (A.length > 1 && A[i] < A[this.parent(i)]) {
      [A[i], A[this.parent(i)]] = [A[this.parent(i)], A[i]];
      i = this.parent(i);
    }
  }

  extractMin() {
    let A = this.heap;
    let min = A[0];
    A[0] = A[A.length - 1];

    let i = 0;
    while (i < A.length) {
      let C =
        A[this.child1(i)] < A[this.child2(i)] ? this.child1(i) : this.child2(i);
      if (A[C] < A[i]) {
        [A[C], A[i]] = [A[i], A[C]];
        i = C;
      } else {
        break;
      }
    }
    A.pop();
    return min;
  }

  nthSmallest(n) {
    if (n > this.heap.length) {
      return null;
    }

    let heapCopy = [...this.heap];
    // console.log(heapCopy);
    let tempHeap = new MinHeap();
    tempHeap.heap = heapCopy;

    let nthMin;
    for (let i = 0; i < n; i++) {
      nthMin = tempHeap.extractMin();
      // console.log(nthMin);
    }
    return nthMin;
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  child1(index) {
    return index * 2 + 1;
  }
  child2(index) {
    return index * 2 + 2;
  }
}

const heap = new MinHeap();
heap.insert(10);
heap.insert(22);
heap.insert(2);
heap.insert(34);
heap.insert(1);
console.log(heap.heap);
console.log(heap.nthSmallest(3));
