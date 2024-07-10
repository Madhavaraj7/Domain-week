function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }else{
        right.push(arr[i])
    }
  }
  return [...quickSort(left),pivot,...quickSort(right)]
}

console.log(quickSort([12, 33, 1, 222, 3, 4, 10]));
