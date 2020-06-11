//It will be acting like the whole source code of greet was written here.

//The code of greet will be executed accordingly.We should consider the whole greet file as an function which will be executed as the rules of execution context & will return the module.exports object

//The exports object of greet.js will be returned after invoking require

//When we require a function nodeJs stores the module in the cache
const greet = require("./greet");
// console.log(greet) //exports object of greet

function a(data) {
  console.log("Hello");
}

a.key = "sexy";

// console.log(a)

// console.log({
//     exports,
//     require,
//     module,
//     __filename,
//     __dirname
// })

//Although we are requiring same file twice but the greet file will be only executed once
//Second time we require the same module it shares module from the cache
const greet2 = require("./greet");
