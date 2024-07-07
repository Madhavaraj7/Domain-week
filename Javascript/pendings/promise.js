//promise.all - if everything is resolved it shows everything if one
//  it shows only the reject
//promise.allSettled  -  it shows status of every promise even if it is 
//  rejected orresolved
// promise.race  - it shows the promise which first completed in the first 
//  place even if it isnresolved or rejected
//promise.any  -  it shows the first resolvd promise in the multipromises



let newpro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("This is a new promise 1");
    reject("this is not a proper promise");
  }, 2000);
});

let newpro2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is a new promise 2")
    // reject("this is not a proper promise");
  }, 2000);
});


const allProm = Promise.any([newpro1, newpro2]);


allProm
  .then((x) => {
    console.log(x);
  })
  .catch((x) => {
    console.log(x);
  });


  
  