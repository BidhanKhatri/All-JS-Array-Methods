// splice method is use to add any element at any position of an array
// splice() doesnot return the new array
// splice() changes the original array
// splice() is also used to delete the elements of an array

// Syntax: array.splice(startIndex, deleteCount, element1, element2, ... , elementN)

// Example

const cars = ["Ferari", "BMW", "Honda"];

// cars.splice(1, 0, "Audi");
cars.splice(1, 1, "Lambo");

console.log(cars);

// First example cars.splice(1, 0, "Audi") gives me ["Ferari", "Audi", "BMW", "Honda"]
// Second example cars.splice(1, 1, "Lambo") gives me ["Ferari", "Lambo", "Honda"]
