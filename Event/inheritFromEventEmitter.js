//Basically many libraries or objects works in this same manner.
//They inherit all the property from "event" modules
//Add extra functionality and customization
//Use EventEmitter in their own way
const EventEmitter = require("events");
const util = require("util");

//We will be creating a object of this constructor
//Under the hood it will be having the properties of EventEmitter
function Greet() {
  //All the "this" of EventEmitter will now be pointing towards "this" of Greet
  //So we will be getting all the properties of EventEmitters constructor
  //   EventEmitter.call(this);
  this.greeting = "Hello World";
}

//We will be adding some functionality outside of EventEmitter
Greet.data =
  "This data will not be passed as __proto__ to the created object by calling new";
Greet.prototype.demo =
  "This data will be still gettable once we invoke inherit(). This method doesn't reset the whole prototype object";

//Adding all the properties of EventEmitter.prototype
//But we are not getting the properties of EventEmitters constructor
util.inherits(Greet, EventEmitter);

// console.log(Greet.prototype.__proto__)
// Behind the Scene of Greets object portion
// {
//     data : "This data will not be passed as __proto__ to the created object by calling new";
//     //Only the properties of prototype object will be passed as __proto__ to the created object
//     prototype: {
//         demo: "This data will be still gettable once we invoke inherit(). This method doesn't reset the whole prototype object",
//         __proto__:{
//             ...All the properties of EventEmitter is stored here...
//             on: / *** /;
//             emit: / *** /;
//         }
//     }
// }

//Adding greet method which will be available to all the instance of this constructor
Greet.prototype.greet = function(params) {
  this.emit("greet", params);
};

var greeter = new Greet();

// console.log(greeter.__proto__)

// greeter = {
//     /* ...Al the properties of Event Emitter... */
//     greeting: "Hello World",
//     __proto__: {
//         demo: '/* */',
//         greet: '/* */',
//         __proto__:{
//             /*...All the properties of EventEmitter is stored here... */
//             on: '/* */',
//             emit: '/* */',
//             __proto__: {
//                 /* All the default properties of Object */
//             }
//         }
//     }
// }

//If the callback needs params then we can pass it.Which the greet function will recieve.
//Then we pass it to the event method as second args
//Which will be available then in the callback
greeter.on("greet", params => {
  console.log("Someone Greeted");
  console.log(params);
});

// greeter.greet("Passed Params");

// console.log(Greet.prototype.demo);
