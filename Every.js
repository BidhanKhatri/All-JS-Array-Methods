// every methods return true only if all the elements of the array matches the condition
// every() returns false if any element of the array does not match the condition

// Syntax: every(()=> {//condition})

// Example:

const sameValues = ["Bidhan", "Bidhan", "Bidhan", "Bidhan"];
const differentValues = ["Bidhan", "Ram", "Hari", "Sita"];

const isAllBidhan = sameValues.every((element) => element === "Bidhan");
console.log(isAllBidhan); //true

const isAllBidhanValues = differentValues.every((elem) => elem === "Bidhan");
console.log(isAllBidhanValues); //false

// As a result I am getting true for isAllBidhan, as it returns true only if all the elements of the array matches the condition.
// As a result I am getting false for isAllBidhanValues, as it returns false if any element of the array does not match the condition.
