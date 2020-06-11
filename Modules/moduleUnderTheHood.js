//Actual code we Write
function add(a, b) {
    return a + b;
  }
  
  module.exports = add;
  
  //Behind the Scene
  (function(exports, require, module, __filename, __dirname) {
    //exports <==> module.exports
    //exports is used as shorthand
    //The following two object pointing to the same memory space
  
    function add(a, b) {
      return a + b;
    }
  
    //Both of the following exports setup are equivalent
    //They are referencing the same memory
    module.exports.data = "Hello";
    exports.data = "Hello";
  
    //But there is problem in the following case
    //As we know that when we assign a value to the variable the reference gets changed.
    //Call by reference wasn't followed here
    //So this time they are referencing different memory space
    //As node module always return module.exports, If we export data in the second manner an empty object will be returned cause module.exports was not overrided this time.
    module.exports = add; //This is a always object
    exports = add; //This is a function
  
    //The module alaways return the exports in the following way not "return exports"
    return module.exports;
  })();
  