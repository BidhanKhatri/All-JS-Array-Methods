// includes() method is used to check if an array contains a specific element
// includes() returns true if the element is found in the array
// includes() returns false if the element is not found in the array
// difference between includes() and some() is that
// includes() contains a value and some() contains a callback function

// Syntax:
// array.includes(element);
// array.includes(element, startIndex);

const laptops = ["Dell", "HP", "Lenovo", "Asus", "Acer"];

const isDellAvailable = laptops.includes("Dell");
console.log(isDellAvailable); // true

const isMacBookAvailable = laptops.includes("MacBook");
console.log(isMacBookAvailable); // false