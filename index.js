// Function that takes a callback function as an argument and calls it
function receivesAFunction(callback) {
    // Call the callback function
    callback();
  }
  
  // Function that returns a named function
  function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      console.log("This is a named function.");
    }
    // Return the named function
    return namedFunction;
  }
  
  // Function that returns an anonymous function
  function returnsAnAnonymousFunction() {
    // Return an anonymous function directly
    return function() {
      console.log("This is an anonymous function.");
    };
  }
  