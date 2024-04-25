// comparing and passing by reference and value
// ? determine whether each log will print true or false

console.log(4 === 4); //T
console.log("Hello, world" === "Hello, world"); //T

let x = false;
let y = x;
console.log(x === y); //T
x = !x;
console.log(x === y); //F

console.log([1, 2, "c"] === [1, 2, "c"]); //F
console.log({} === {}); //F

y = { id: 1 };
x = y;
console.log(x === y); //T
y.id += 1;
console.log(x.id === y.id); // comparing and passing by reference and value //T
