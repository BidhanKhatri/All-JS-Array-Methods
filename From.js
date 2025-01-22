// from() method is used to create an array string
// we should use from() with Array constructor
// from() returns an array

// Syntax: Array.from(arrayLike, mapFunction);

let str = "123";

let newArray = Array.from(str);
console.log(newArray); // ["1", "2", "3"];

// from() method which mapFunction

let numString = "456";

let newArray2 = Array.from(numString, (elem) => Number(elem));
console.log(newArray2); // [4, 5, 6]
