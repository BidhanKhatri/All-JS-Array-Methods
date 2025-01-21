// join() methods helps to convert array into string with a separator
// separator can be any thing like comma, space, underscore
// join() returns a string

// Syntax: array.join(separator)

// Example:

const data = ["Ram", "Good Boy", "Shyam", "Bad Boy"];

const joinArrayEx1 = data.join();
console.log(joinArrayEx1); // Ram,Good Boy,Shyam,Bad Boy

const joinArrayEx2 = data.join(" - ");
console.log(joinArrayEx2); // Ram - Good Boy - Shyam - Bad Boy

const joinArrayEx3 = data.join(" ");
console.log(joinArrayEx3); // Ram Good Boy Shyam Bad Boy
