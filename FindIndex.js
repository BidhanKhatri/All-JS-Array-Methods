// findIndex() method is same like find() method
// findIndex() return the index of the first element that matches the condition

// Syntax: findIndex(()=> { //condition });

// Example:

const facultyData = ["BCA", ["Bidhan Khatri"], "BCA", "CSIT"];

const findBcaIndex = facultyData.findIndex((data) => data === "BCA");
const findCsitIndex = facultyData.findIndex((data) => data === "CSIT");

console.log(findBcaIndex); // 0
console.log(findCsitIndex); // 3

// As a result I am getting the index 0 for BCA return the first elements index
// As a result I am getting the index 3 for BCA return the first elements index
