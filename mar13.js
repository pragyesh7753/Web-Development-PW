// SPREAD OPERATOR
const oneArray = [1, 2, 3, 4]
const twoArray = [5, 6, 7, 8]

// const threeArray = oneArray.concat(twoArray)
// const threeArray=[oneArray,twoArray]

const threeArray = [...oneArray, ...twoArray]
console.log(threeArray);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function testOne() {
    // console.log(arguments);
    // console.log(typeof arguments);
}
testOne(1, 2, 3, 4)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// REST OPERATOR

function manyArguments() {
    let args = Array.from(arguments)
    console.log(typeof arguments);
    let finalArr = args.map(e => e)
    // let finalArr = args.map(e => e*2)
    console.log(finalArr);
}

function manyArguments2(...args) {
    console.log(typeof args);
    let finalArr = args.map(e => e)
    console.log(finalArr);
}
// manyArguments(1, 2, 3, 4)
// manyArguments(1, 2, 3, 4, 5, 6, 7)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const names = ["superman", "flash"]
const newNames = ["batman", ...names, "thor"]

const sitename = "pwskills"
// console.log([...sitename]);

function pwskills(...values) {
    return values
}
// console.log(pwskills("superman","flash"));

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Set

let emptySet = new Set()
// console.log(emptySet);
console.log(emptySet.size);
let myArray = [1, 2, 3, 4, 3, 2]
let newSet = new Set(myArray)
console.log(newSet);

newSet.add(9)
newSet.clear()
console.log(newSet);
// console.log(newSet.has(9));

// Set difference
function setDifference(setA, setB) {
    return new Set([...setA].filter(el => !setB.has(el)))
}

// +++++++++++++++++++++++++++++++++++++++++++++++
// Map

let map = new Map()
console.log(map.size);
let arr = [
    [1, "Mithun"],
    [2, "Alka"],
    [3, "Prabir"],
    [4, "Shivam"],
    [5, "Vinay"],
];
arr.map((arrayItem) => map.set(arrayItem[0], arrayItem[1]))
console.log(map);