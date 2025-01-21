// some() method is used to check if at least one element of the array matches the condition
// some() returns true if at least one element of the array matches the condition
// some() returns false if no element of the array matches the condition

// Syntax: array.some(()=> { //condition });

// Example:

const phones = ["iphone", "samsung", "oneplus", "redmi", "vivo"];

const isSamsungAvailable = phones.some((phone) => phone === "samsung"); // true
const isNokiaAvailable = phones.some((phone) => phone === "nokia"); // false

console.log(isSamsungAvailable); // true
console.log(isNokiaAvailable); // false
