// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function functionWithTwoParams(x, y) {
  console.log("x = ", x);
  console.log("y = ", y);
  return x + y;
}
// invoke the function and pass in two numbers
functionWithTwoParams(3, 4);
// invoke the function and pass in more than two numbers
functionWithTwoParams(3, 4, 5, 6);
// invoke the function and pass in only one number
functionWithTwoParams(3);
// change the function to set default values for the parameters

function functionWithDefaultParams(x = 9, y = 3) {
  console.log("x = ", x);
  console.log("y = ", y);
  return x + y;
}
// again, invoke the function and pass in only one number
functionWithDefaultParams(3);
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
function functionWithRestParams(x, y, ...a) {
  console.log("x = ", x);
  console.log("y = ", y);
  console.log(a);
  return x + y;
}
// again, invoke the function and pass in more than two numbers
functionWithRestParams(3, 4, 5, 6);
