// this
// for all regular function calls,this points to window object



console.log(this);

var game = "basketball";

var users = {
  name: "Madhav",
  age: 22,
  getAddress: function sayHello() {
    console.log("Kerala", this); // refer lesical scope
    function sayHello() {
      console.log("Hello", this); // refer global
    }
    sayHello();
  },

  getDetails: () => {
    console.log("details", this);  // refer global 
  },
};

// users.getAddress();
users.getDetails();
