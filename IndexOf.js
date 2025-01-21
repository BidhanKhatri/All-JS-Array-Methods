// indexOf() method is same like an findIndex() instead it helps to find the index of elements without callback function

// Syntax :
//  indexOf(element)
//  indexOf(element, startIndex)

const cars = ["Ferari", "BMW", "Honda", "Audi", "Honda"];

const carIndex = cars.indexOf("Honda");
const carIndex2 = cars.indexOf("Honda", 3);

console.log(carIndex); // 2
console.log(carIndex2); //4

// When to use indexOf() and findIndex() ?:
// use indexOf() for primitive data types for example string, number, boolean
// use findIndex() for non-primitive data types for example array, object
// I have used indexOf(element, startIndex) for finding carIndex2, it skips the first 3 elements.
