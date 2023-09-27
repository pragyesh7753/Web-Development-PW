// forEach
let arr = [2, 3, 4]
arr.forEach(function (element, index, arr) {
    console.log(index, element, arr)
})
arr.forEach((element, index, arr) => {
    console.log("arrow: ", index, element, arr)
})

const heros = ["nagraj", "doga", "dhruva", "maniraj"]
heros.forEach((el) => {
    console.log(el.toUpperCase());
})

// map
arr.map(function (element, index, arr) {
    console.log(index, element, arr)
})

heros.map((h) => {
    console.log(h.toUpperCase());
})

// filter
console.log(heros);
const herosWithRaj = heros.filter((h) => {
    return h.endsWith("raj")
})
console.log(herosWithRaj);

// shopping cart
const cartBill = [20, 30, 50]
const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0)
console.log(sumOfCartBill);

const gameScore = [200, 310, 300, 250, 150]
// check if all values are numbers
// console.log(typeof gameScore[1]);
const gameScoreCheck = gameScore.every((v) => typeof v === "number")
console.log("check: ", gameScoreCheck);

// find score above 200
const above200 = gameScore.find((score) => score > 200)
console.log(above200);

// findIndex
const above200Index = gameScore.findIndex((score) => score > 200)
console.log(above200Index);
// some
// Check whether an element is even
const isEven = ((element) => element % 2 === 0)
console.log(gameScore.some(isEven));
// sort
const sortScore=gameScore.sort();
console.log(sortScore);
const sortScore2=gameScore.sort((a,b)=>a-b);
console.log(sortScore2);
// reverse
const reverseScore=gameScore.reverse();
console.log(reverseScore);
