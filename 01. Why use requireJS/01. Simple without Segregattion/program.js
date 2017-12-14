// open a document ready function
$(function () {
  // function that just changes the background color
  var setBackground = function (color) {
    $(document.body).css("background-color", color);
  }

  // function to handle the pallete color selection
  var setColor = function (e) {
    // the color object contains all the hex, rgba, and hsl
    // conversions and utilities
    var color = e.sender.color().toBytes();

    // set the color
    setBackground(e.value);
  };

  // select and create the color pallete
  var colors = $("#colors").kendoFlatColorPicker({
    change: setColor,
    value: "#fff"
  }).getKendoFlatColorPicker();

});
