// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let i = 1;
// 2) create a variable to represent the current total
let total = 0;
// 3) write a while loop that sums the numbers from 1 to 100
while (i < 100) {
  total = total + i;
  console.log(`i: ${i}`);
  console.log(`Total: ${total}`);
  i++;
}

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

// 1) write a for loop that sums the numbers from 1 to 100
for (let ii = 0; ii < 100; ii++) {
  total = total + i;
  console.log(`ii: ${ii}`);
  console.log(`Total2: ${total}`);
}
