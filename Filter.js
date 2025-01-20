// filter() method is used to filter the elements of an array based on a condition
// filter() returns a new array containing only the elements that match the condition

//syntax: filter(()=>{ //condition });

const numbers = [1, 2, 3, 4, 5, 6];

const newNumbers = numbers.filter((nums) => nums >= 3);

console.log(newNumbers);

// I have given a condition where nums >= 3
// As a result I am getting new numbers of array [3, 4, 5, 6]
