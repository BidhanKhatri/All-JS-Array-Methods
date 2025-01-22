// keys() method helps to get keys of of an array
// keys() returns a new array of keys

const countries = ["Nepal", "India", "China", "USA"];

const countriesKeys = countries.keys();

for (let keys of countriesKeys) {
  console.log(keys);
}
// output:
// 0
// 1
// 2
// 3
