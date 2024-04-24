//refactor the functions below into arrow syntax
function myNumberFunction() {
  return ((2 ** 2 + 3) % 4) * 14;
}
const myNumberFunctionTwo = () => ((2 ** 2 + 3) % 4) * 14;

function greet(name) {
  return `Hello, ${name}`;
}
const greetTwo = name => `Hello, ${name}`;

const timeOfDayGreet = function(name, timeOfDay) {
  return `Hello, ${name}, good ${timeOfDay}`;
};

const timeOfDayGreetTwo = (name, timeOfDay) =>
  `Hello, ${name}, good ${timeOfDay}`;

function tripleAndHalf(num) {
  let triple = num * 3;
  return triple / 2;
}
const tripleAndHalfTwo = num => {
  let triple = num * 3;
  return triple / 2;
};
function sumTwoNumbers(num1, num2) {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
}
const sumTwoNumbersTwo = (num1, num2) => {
  let sum = num1 + num2;
  console.log(`The sum of your numbers is ${sum}.`);
  return sum;
};
