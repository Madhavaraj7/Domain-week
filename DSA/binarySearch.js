// function binarySeacrh(arr, val) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     if (arr[mid] === val) {
//       return mid;
//     }
//     if (arr[mid] < val) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1
// }
// console.log(binarySeacrh([1, 2, 3, 4, 5, 6, 7, 8], 8));

function recursiveBinarySearch(arr, val, left = 0, right = arr.length - 1) {
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === val) {
      return mid;
    }
    if (arr[mid] < val) {
      return recursiveBinarySearch(arr, val, mid + 1, right);
    } else {
      return recursiveBinarySearch(arr, val, left, mid - 1);
    }
  }
  return -1
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(recursiveBinarySearch(arr, 4));
