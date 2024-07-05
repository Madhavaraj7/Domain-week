// The call method calls a function with a given this value and arguments provided individually.

function greet(greeting) {
  console.log(greeting + "," + this.name);
}

const person1 = { name: "Madhav" };

greet.call(person1,"hello")

// The apply method calls a function with a given this value, and arguments provided as an array (or array-like object).

// function greet(greeting, punctuation) {
//     console.log(greeting + ', ' + this.name + punctuation);
// }

// const person2 = { name: 'Madhav' };

// greet.apply(person2, ['Hello', '!']);

//The bind method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

// function greet(greeting, punctuation) {
//   console.log(greeting + ", " + this.name + punctuation);
// }

// const person = { name: "Madhav" };

// const boundGreet = greet.bind(person, "Hello");
// boundGreet("!");
