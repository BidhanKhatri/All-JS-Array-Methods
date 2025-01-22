// slice() method is used to extract a part of an array and return a new array.
// one example can be cutting the slice of cake and giving it to a friend.
// we can use slice to extract some elements from an array.

// Syntax: array.slice(startIndex, endIndex);

// Example:
let names = ["Shyam", "Ram", "Hari", "Geta"];

const selectedNames = names.slice(1, 3);
const selectedNamesWithOutEndIndex = names.slice(1);

console.log(selectedNames); // ["Ram", "Hari"]
console.log(selectedNamesWithOutEndIndex); // ["Ram", "Hari", "Geta"]

// Note: endIndex is exclusive for selectedNames
// exclusive means endIndex is not included for selectedNames

// For selectedNamesWithOutEndIndex
// I haven't given endIndex so it take all remaining elements
