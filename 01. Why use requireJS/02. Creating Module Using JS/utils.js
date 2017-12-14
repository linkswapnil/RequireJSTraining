// variables declared outside of a function will go on the global
// scope, so create an "APP" namespace
var APP = window.APP || {};

/*************************************************
 UTILS MODULE
 **************************************************/
// use a function that executes right away and assign
// whatever it returns to the utils variable
APP.utils = (function() {
  // return an object
  return {
    // declare the function to change the background color
    setBackground: function(color) {
      $(document.body).css("background-color", color);
    }
  };
}());