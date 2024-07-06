

// primitive value
//deep copy
let a = 10

let b = a
a = 15
console.log(a)
console.log(b)



// non primitive value
// shallow copy


let obj = {
    name:'madhav'
}

let obj1 = obj

obj.name = 'MERN'

console.log(obj)
console.log(obj1)