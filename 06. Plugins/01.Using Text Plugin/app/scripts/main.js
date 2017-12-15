require(["one", "two", "three","text!../html/partial.html", "libs/underscore",'domReady!'], function (one, two, three, html) {
  // Underscore is loaded globally.
  var context = {
    people : {
      "Swapnil" : "Back-end Developer",
      "Sudhir" : "Front-end Developer",
      "Vijay" : "Designer",
      "Ajay"  : "Content Strategist"
    }
  };
  document.getElementById('personList').innerHTML = _.template(html,{variable:'people'})(context.people);
});