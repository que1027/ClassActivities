// create a variable called "name" that references a string
const name = "Quinton";
// create a variable called "favoriteSong" that references a string
let favoriteSong = "Appertently";
// create a variable called "wage" that references a number
let wage = 1;
// create a variable called "age" that references a number
let age = 23;
// create a variable called "onlyChild" that references a boolean
let onlyChild = false;
// create a variable called "satisfied" that references a boolean
let satisfied = false;
// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = false;
console.log(typeof favoriteThing);
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "Two Minute Drill";
// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = "Don't have one";
console.log(typeof favoriteThing);
// Happy Birthday!
// Reassign "age" to a new value
age = 24;
// You got a big raise at work.
// Reassign "wage" to a new value
wage = 1.5;
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true; // I lied
// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log(
  "Hello I make " +
    wage +
    " an hour and when people say I'm satisfied I say " +
    satisfied +
    "."
);

// While going through this activity, in your terminal navigate to your Activities repo
// To print/view what you are working on, use the Chrome Developers Console in your Chrome Browser, or else use StackBlitz - https://stackblitz.com

// Pushing the activity up to GitHub (in the development branch)
// Open your terminal, and make sure you are inside of your repo folder
// Type git add 2.2.2-JSVariablesAndPrimitives.js
// Type git status
// The file name should appear in green, saying it is ready to be staged
// Type git commit -m "JS Variables and Primitives Part 2"
// Type 'git status'
// The file name should not appear, meaning it is waiting to be pushed up to GitHub
// Type git push
// Type git status
// The working tree should be clean
// This means that the changes you have made are in GitHub
