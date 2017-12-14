require(['calculator/add','calculator/square','config'], function (add, square, config) {
  console.log(add(5,15));
  console.log(square(5*5));
  console.log(config);
})


