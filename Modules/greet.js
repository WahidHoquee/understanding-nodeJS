//When we import JSON data it is by default converted into objects.
const data = require("./data.json");

//Although index.js has the same variable named "a" but it will not be overwritten.
//As we know that each function maintains aseparate lexical scope.
//So there is no chance of conflict
//To pass anything to the other file only thing we need to do is to attach the data with module.exports object
var a = "Override the index.js file's 'a' variable";

console.log("Hello");

module.exports.data = "Exported Data";
