const EventEmitter = require("events");

module.exports = class Greet extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello World";
  }
  greet(params) {
    this.emit("greet", params);
  }
};
