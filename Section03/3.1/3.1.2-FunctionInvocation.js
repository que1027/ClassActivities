//ptint the function below
function myNumberFunction() {
  let num = 2 ** 2;
  num = num + 3;
  num = num % 4;
  num = num * 14;
}
console.log("this is what myNumberFunction() returns" + myNumberFunction());
//what is num
// 42
//how does console.log(num) fit ito this when we invoke myNumberFunction()
//it will log the final value of num (42) and then this is what myNumberFunction() returns undefined
//invoking a function inside of a console.clog, what is order of operations
//the function then the console log
//now, invoke the myNumberFunction function
myNumberFunction();
//print just the function of console.log (no invocation)
console.log(console.log);
