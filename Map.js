// map() is a array method which return the new array from the existing array
// map() doesnot changes the original array instead creates a new array

//syntax:

// map((items)=>{ //code });

//Example:

const fruits = ["apple", "banana", "orange"];

const newFruits = fruits.map((fruit) => {
  return fruit + " is a fruit";
});
console.log(newFruits);

// As map() creates a new array it doesnot change the original array
// I have added " is a fruit" at the end and it returns me a new array which is different from the original array
