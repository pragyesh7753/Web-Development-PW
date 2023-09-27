// // Arrays
// let a = [1, 2, 3, 4, 5, false, "pragyesh"]
// console.log(a)

// let b = new Array(5)
// let c = new Array("abc", "def", "ghi")
// console.log(b)
// console.log(c)
// console.log(a[4])
// a[4]=5
// console.log(a[4])

// // Array Methods
// let arr = [1, 2, 3, 4];
// arr.push(6, 7);      //to add element in end
// console.log(arr)
// arr.pop();       //to delete element from end
// console.log(arr);
// let f = arr.shift()
// console.log(f);
// console.log(arr);
// arr.shift()     //to delete element from starting
// console.log(arr);
// arr.unshift(9)      //to add element in starting
// console.log(arr);

// let a1 = [1, 2, 3, 4, 5]
// let a2 = [3, 4, 5]
// let a3 = a1.concat(a2)      //to add two arrays
// console.log(a1, a2, a3);

// let s=a3.join('@')    //to join elements of an array by any character, this also converts array into string
// console.log(s);

// a3.reverse()        //to reverse an array
// console.log(a3);
// console.log(a3.indexOf(4));     //to find index of an element
// let arr1=[1,2,3,4,5,6]
// console.log(arr1.slice(2,5));       //to slice an array
// console.log(arr1.splice(2,0,11));      //to delete elements from array and can also add elements in between

// // Functions
// function greet() {
//     console.log("Hi there");
//     console.log("How are you");
// }
// greet();
// function sqr(s) {
//     // console.log(s * s);
//     return s * s;
//     // return;     //this will return undefined
// }
// // sqr(8)
// let a = sqr(8)
// console.log(a);
// function add(x, y = 10) {
//     return x + y;
// }
// console.log(add(1, 3));

// // Anonymous Functions
// let x = function () {
//     console.log("Hi");
// }
// x();

// (function exec(){
//     console.log("named");
// })();       //to call function immediately
// // this is known as IIFE (Immediately Invoked Function Expression) and it can not be called again
// // this functions are also known as self invoking functions
// (function(x){
//     console.log(x*x);
// })(5);

// // Objects
// let obj = { id: 101, name: "Alex", salary: 10000 }
// console.log(obj);
// let emp = new Object();
// emp.id = 102;
// emp.name = "Sam";
// console.log(emp);
// function Emp(i, n, s) {
//     this.id = i;
//     this.name = n;
//     this.salary = s;
// }
// const e = new Emp(103, "Any", 12000);
// console.log(e);
// console.log(emp.id);
// console.log(emp['name']);
// emp.salary = 13000;
// emp['salary'] = 13000;
// emp.id = 13;
// emp['name'] = 'Mr. Sam'
// delete emp.id;
// console.log(emp);

// Object Methods
let emp = {
    id: 101,
    name: "Sanket",
    age: 24
};
let keys = Object.keys(emp)    //to get keys of an object in an array
console.log(keys);
let values = Object.values(emp)     //to get values of an object in an array
console.log(values);
let entries = Object.entries(emp)       //to get keys and values of an object in an array
console.log(entries);
Object.freeze(emp)      //to freeze an object so that it can not be modified
Object.seal(emp)        //to seal an object so that it can not be modified but can be deleted but can be updated
emp.id = 100;
console.log(emp);
let o = Object.assign({}, emp)     //to copy an object into another object
console.log(o);