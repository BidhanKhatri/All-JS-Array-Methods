// isArray() method is used to check if an data is an array or not
// isArray() returns true if the data is an array
// isArray() returns false if the data is not an array
// It should be used with Array constructor

// Syntax: Array.isArray(data);

const myArray1 = [1, 2, 3, 4, 5];
const myArray2 = "12345";

const isMyArray1True = Array.isArray(myArray1);
console.log(isMyArray1True); //true

const isMyArray2True = Array.isArray(myArray2);
console.log(isMyArray2True); //false
