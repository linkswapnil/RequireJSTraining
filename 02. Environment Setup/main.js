require(['jquery', 'message','anotherModule'], function ($, message, anotherModule) {
  $("#output").html(message + ' ' + anotherModule);
})