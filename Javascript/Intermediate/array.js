var countries = ["India", "USA", "Japan", "China"];

var states = new Array("Kerala", "Punjab", "Assam", "Goa");

console.log(states[0]);
console.log(states.length);
states[1] = "Rajasthan";
console.log(states);

var user = ["Madhav", "Madhav@gmail.com", 3, 34, true];
console.log(user);

user.push("Last element"); // add last of the array
console.log(user);
user.pop(); // remove last of the array
console.log(user);
user.unshift("New value"); // add first of the array
console.log(user);
user.shift(); // remove first of the array
console.log(user);

console.log(user.indexOf(3));

console.log(Array.from("Madhav"));


