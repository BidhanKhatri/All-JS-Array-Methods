// find method is same like an filter method but it returns only the first element that matches the condition

// Syntax: find(()=>{ //condition });

// Example:

const studentsName = ["ram", "shyam", "hari", "ram"];

const result = studentsName.find((std) => std === "ram");

console.log(result); // ram

// I have created a array of studentsName which have 2 repeated names "ram"
// As a result I am getting "ram"
// find() returns only the first element that matches the condition
// filter() returns all the elements that matches the condition
