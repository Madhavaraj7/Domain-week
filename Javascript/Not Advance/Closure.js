// (function sayHello() {
//   console.log("I say Hello");
//   console.log("I again say Hello");
// })();

// //IIFE

// // function init() {
// //   var firstName = "Madhav";
// //   function sayFirstName() {
// //     console.log(firstName);
// //   }
// //   return sayFirstName();
// // }
// // var value  = init();
// // value()

// //In JavaScript, a closure is a feature where an inner function has access to the outer (enclosing) function's variables

// function outerFunction(outerVariable) {
//   console.log("Outer Variable: " + outerVariable);
//   return function innerFunction(innerVariable) {
//     console.log("Outer Variable: " + outerVariable);
//     console.log("Inner Variable: " + innerVariable);
//   };
// }

// const newFunction = outerFunction("outside");
// newFunction("inside");

// //Currying

// function add(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }
// console.log(add(5)(3)(8)); // Output: 16

function SetCounter() {
  let a = 0;
    return function inner() {
      console.log(a += 10);
  }
}

const newFn = SetCounter();
newFn();
newFn();
newFn();
newFn();

