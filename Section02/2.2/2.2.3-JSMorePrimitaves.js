// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "Evening"
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Good ${timeOfDay}`;
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let foobar;
// Print the new variable and its type
// What type should we expect?

//undefined
console.log(typeof foobar, foobar);
// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?

//Undefined
foobar = null;
// Print the variable and its type again
// What type should we expect?

//NULL
console.log(typeof foobar, foobar);
// Try to print a variable that does not exist
// What should we expect to print in the CLI?

//will log an error (variable city not deglaired)
console.log(city);
// Print "greeting" again
// Will this line run?

//No
console.log(greeting);
