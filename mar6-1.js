const powerTwo = (n) => {
    return n ** 2;
}

function powerCube(powerTwo, n) {
    return powerTwo(n) * n;
}

// console.log(powerCube(powerTwo, 3));

function sayHello() {
    return () => {
        console.log("Hello Pragyesh");
    }
}
let guessValue = sayHello();
// console.log(guessValue);
// guessValue();

const higherOrder = n => {
    const oneFunction = m => {
        const twoFun = p => {
            return m + n + p;
        }
        return twoFun;
    }
    return oneFunction;
}
// console.log(higherOrder(2)(3)(4));

const myNums = [2, 3, 4, 5]

const sumArray = arr => {
    let total = 0
    arr.forEach(function (element) {
        total += element
    });
    return total
}
// console.log(sumArray(myNums));

function oneMoreHello() {
    console.log("Hello Pragyesh !", Math.random());
}
setInterval(oneMoreHello, 1000);  // 1 sec
// setTimeout(oneMoreHello,2000)    // 2 sec