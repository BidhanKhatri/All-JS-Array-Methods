// entries() method is used to get the key-value pairs of an array
// entries() returns a new array of key-value pairs
// It also retunr new Array Iterator

// Syntax: array.entries();

const countries = ["Nepal", "India", "China", "USA"];

const countryEntries = countries.entries();

for (let country of countryEntries) {
  console.log(country);
}

// output:
//   [ 0, 'Nepal' ]
//   [ 1, 'India' ]
//   [ 2, 'China' ]
//   [ 3, 'USA' ]
