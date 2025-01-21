// fill() method is use to fill the elements of an array with a specific value
// fill() returns the modified array

// Syntax: array.fill(value, startIndex, endIndex);

const array = ["Hari", "Geta", "Shyam"];

const fillArray = array.fill("Ram");
console.log(fillArray); // ["Ram", "Ram", "Ram"]

console.log(array); // ["Ram", "Ram", "Ram"]

// As a result the original array is modified
// also fill() return the modified array
