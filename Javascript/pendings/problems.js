// // Find the second largest even number in an array without sorting in js

// function secondLargestEvenNumber(arr) {
//   let largestEven = -Infinity;
//   let secondLargestEven = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       if (arr[i] > largestEven) {
//         secondLargestEven = largestEven;
//         largestEven = arr[i];
//       } else if (arr[i] > secondLargestEven && arr[i] !== largestEven) {
//         secondLargestEven = arr[i];
//       }
//     }
//   }
//   return secondLargestEven === -Infinity ? null : secondLargestEven;
// }

// let arr = [84,11, 22, 33, 44, 55, 66, 77, 88, 80,82];
// console.log(secondLargestEvenNumber(arr));

// function secondLargestNumber(arr) {
//   let largest = -Infinity;
//   let secondLargest = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] > secondLargest && arr[i] !== largest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest === -Infinity ? null : secondLargest;
// }

// let arr = [1, 10,22,2, 3, 4, 5, 6, 7, 8, 9];

// console.log(secondLargestNumber(arr));

// generator functoion to generate even numbers endlessly

// function* genarotorFn(limit) {
//   let n = 0;
//   while (n < limit) {
//     yield (n += 2);
//   }
// }

// const newFn = genarotorFn(10);

// for (let i = 0; i < 5; i++) {
//   console.log(newFn.next().value);
// }


function* genFn(n) {
  while (true) {
    yield Math.pow(n,++n)
  }
}

const newFn1 = genFn(2);
console.log(newFn1.next().value);
console.log(newFn1.next().value);
console.log(newFn1.next().value);


