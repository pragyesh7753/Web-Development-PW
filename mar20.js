// // Try, catch, finally
// try {
//     let x = undefined;
//     console.log(x[0]);
// } catch (err) {
//     console.log("Error handling in catch", err);
// } finally {
//     console.log("finally always gets executed");
// }
// console.log("end");

// // Use of Try Catch in Real World Application
// try {
//     console.log("hello");
//     console.log(a);
//     console.log("ending try");
// } catch {
//     console.log("handled");
// }finally{
//     console.log("finally");
// }
// console.log("end");

// // Defining a Class, Class Instantiation
class Product {
    // name;
    // price;
    // rating

    constructor(n, p, r) {
        console.log("Calling a constructor");
        this.name = n;
        this.price = p;
        this.rating = r;
    }

    // behaviours -> functions -> member functions
    display() {
        console.log("this refers to", this);
        console.log("displaying the current product", this.name, this.price, this.rating);
    }
}
const p = new Product("iphone", 100000, 5);  // new --> creates an empty plain object
// -> in the above piece of code we are clling the constructor method
console.log(p);
p.display();
// // Class Constructor, Deafault Value With Constructor
