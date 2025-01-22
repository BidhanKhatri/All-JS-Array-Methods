// reduce() method is used to reduce the elements of an array to a single value
// reduce() returns the reduced value

// Syntax: array.reduce(callbackFunction, initialValue);
// callbackFunction contains: (previousValue, currentValue)=> {}

const array = [1, 2, 3, 4, 5];

const sumOfArrayElements = array.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, 0);
console.log(sumOfArrayElements); // 15
