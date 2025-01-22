// sort() method is used to sort the elements of an array
// sort() changes the original array

// Syntax : array.sort();

const numbers = [2, 4, 1, 80, 9];
console.log(numbers.sort()); // [1, 2, 4, 80, 9]

// I issue is it sorts the elements but in UTF-8 order
// That means it changes the numbers into string and sort the string

// To fix this issue we have to use compare function

// Syntax: array.sort((a,b)=> { //condition })

// Notes: (for sorting in ascending order)
// if > 0 then a is greater than b
// if < 0 then a is less than b
// if = 0 then a is equal to b
const array = [2, 4, 1, 80, 9];

array.sort((a, b) => a - b);
console.log(array); // [1, 2, 4, 9, 80]
