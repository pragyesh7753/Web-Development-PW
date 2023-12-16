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
    // rating;


    constructor(n, p, r) {
        console.log("Calling the constructor");
        this.name = n;
        this.price = p;
        this.rating = r;
        // return 10;   if you're returning primitive value from constructor, it will be ignored
        // return { x: 0, y: 20 }; // if you're returning object from constructor, it will be returned
    }
    

    // behaviours -> functions -> member functions
    display() {
        console.log("this refers to", this);
        console.log("displaying the current product", this.name, this.price, this.rating);
    }
}
const p = new Product("iphone", 100000, 5);  // new --> creates an empty plain object
// // Class Constructor, Default Value With Constructor
// const p=new Product();
// in the above piece of code we are calling the constructor method
console.log(p);
p.display();
