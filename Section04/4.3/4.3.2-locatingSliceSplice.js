const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];
// console.log(arr.length);
// find the first index of "a", "b", and "c"
// console.log(arr.indexOf('a'), arr.indexOf('b'), arr.indexOf('c') );
// find the last index of "a", "b", and "c"
// console.log(arr.lastIndexOf('a'), arr.lastIndexOf('b'), arr.lastIndexOf('c') );
let firstA = arr.indexOf("a");
let lastA = arr.lastIndexOf("a");
// console.log(firstA, lastA);
// if the first index and last index of "a" is not the same, remove the last instance
function removeStuff(arr) {
  if (firstA !== lastA) {
    arr.splice(lastA, 1);
  }
  return arr;
}
console.log(removeStuff(arr));

// repeat until there is just one "a"
// Matt's solution to final challenge:
function removeDuplicates(array, duplicatedValue) {
  let firstIndex = array.indexOf(duplicatedValue);
  let lastIndex = array.lastIndexOf(duplicatedValue);
  while (firstIndex !== lastIndex) {
    array.splice(lastIndex, 1);
    lastIndex = array.lastIndexOf(duplicatedValue);
  }
  return array;
}

console.log(removeDuplicates(arr, "a"));

for (lastA; firstA !== lastA; lastA = arr.lastIndexOf("a")) {
  arr.splice(lastA, 1);
  console.log(arr);
}
