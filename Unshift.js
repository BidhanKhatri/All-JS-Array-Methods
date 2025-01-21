// unshift() method add the elements at first of the array
// unshift() returns the new length of the array

const landsPrice = [1000, 2000, 3000, 4000, 5000];

console.log("landPrice load length = ", landsPrice.length);
console.log("old array", landsPrice); // [1000, 2000, 3000, 4000, 5000]

const addNewLandPrice = landsPrice.unshift(6000); // 6000 if consoled

console.log("landPrice new length = ", landsPrice.length);
console.log("new array", landsPrice); // [6000, 1000, 2000, 3000, 4000, 5000]
