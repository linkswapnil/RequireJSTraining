requirejs.config({
  config: {
    'bar': {
      size: 'large'
    },
    'baz': {
      color: 'blue'
    }
  }
});

//bar.js, which uses simplified CJS wrapping:
//http://requirejs.org/docs/whyamd.html#sugar
define('bar',function (require, exports, module) {
  //Will be the value 'large'
  var size = module.config().size;
  console.log(size);
});

//baz.js which uses a dependency array,
//it asks for the special module ID, 'module':
//https://github.com/requirejs/requirejs/wiki/Differences-between-the-simplified-CommonJS-wrapper-and-standard-AMD-define#wiki-magic
define('baz',['module'], function (module) {
  //Will be the value 'blue'
  var color = module.config().color;
  console.log(color);
});

require(['bar', 'baz'], function (bar, baz) {
})