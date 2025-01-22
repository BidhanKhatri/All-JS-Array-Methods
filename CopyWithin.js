// copyWithIn() is used to copy the element in a same array

// Syntax: array.copyWithIn(targetIndex, startIndex, endIndex);

const array = [1, 2, 3, 4, 5];

// giving targetIndex only
console.log(array.copyWithin(2)); // [1,2,1,2,3]

//giving targetIndex and startIndex
console.log(array.copyWithin(2, 0)); // [1,2,1,2,1]

//giving targetIndex, startIndex and endIndex
console.log(array.copyWithin(2, 0, 2)); // [1,2,1,2,1]

// Note: Logical to understand, you can skip for now
