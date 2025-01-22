// values() method is used to get the value of an array elemeq
// values() returns a new array of values

// Syntax: array.values();

const countries = ["Nepal", "India", "China", "USA"];

const countryValues = countries.values();

for (let value of countryValues) {
  console.log(value);
}

// output:
// Nepal
// India
// China
// USA
