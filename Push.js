// push methods helps to add the elements at last of the array
// push() returns the new length of the array

// Syntax: array.push(element);

// Example:

const numbers = [1, 2, 3, 4, 5];

console.log("numbers old length = ", numbers.length);
console.log("old array", numbers); //[1, 2, 3, 4, 5]

const addNewNumber = numbers.push(6); //6

console.log("numbers new length = ", numbers.length);
console.log("new array", numbers); //[1, 2, 3, 4, 5, 6]
