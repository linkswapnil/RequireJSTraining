/***************************************************
 Color Palette Module
 ****************************************************/
// create the color palette module off the app namespace
// all that we need to return out of this function is an instance
// of the color palette widget
APP.palette = (function() {

  // this function is private and not available to utils
  // function to handle the pallete color selection
  var setColor = function (e) {
    // the color object contains all the hex, rgba, and hsl
    // conversions and utilities
    var color = e.sender.color().toBytes();

    // set the color
    APP.utils.setBackground(e.value);
  };

  // select and create the color pallete
  var colors = $("#colors").kendoFlatColorPicker({
    change: setColor,
    value: "#fff"
  }).getKendoFlatColorPicker();

  // just return the entire widget instance
  return colors;

}());