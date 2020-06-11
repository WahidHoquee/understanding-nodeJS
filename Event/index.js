const Emitter = require("events"); //Built in NodeJS Events with lots of feature
// const Emitter = require("./events") //Basic Event emitter built

const event = new Emitter();

event.on("data", () => {
  console.log("Greeting from index.js");
});

console.log("Hello");

event.emit("data");

/* <------------------ Breaking Modules --------------------> */

const Greet = require("./customEventEmitter");

const greeter = new Greet();

greeter.on("greet", params => {
  console.log("Someone Greeted");
  console.log(params);
});
greeter.greet("Passed Params");
