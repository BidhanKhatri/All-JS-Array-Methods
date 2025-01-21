// lastIndexOf() returns the index from the last element that matches the condition
// lastIndexOf() returns -1 if the element is not found

// Syntax:
// lastIndexOf(element)
// lastIndexOf(element, startIndex)

const bikes = ["Honda", "Yamaha", "Honda", "Honda", "Honda"];

const hondaIndex = bikes.lastIndexOf("Honda"); //4

console.log(hondaIndex);

// As a result it returns the index 4 for Honda
// returns the index from the last element that matches the condition
// sees the array from right to left