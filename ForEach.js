// forEach() is a array method that runs a function on each element of an array
// use forEach to loop through an array when you want to execute the same function/code on each element of the array

// syntax:

// array.forEach(callbackFunction);
// callbackFunction syntax is () => {}

//Example:

const array = [1, 2, 3, 4, 5];

array.forEach((element) => {
  console.log(element);
});
