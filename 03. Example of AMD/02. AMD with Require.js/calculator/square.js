define(['calculator/multiply'],function (multiply) {
  return function square(x) {
    return multiply(x,x);
  }
});