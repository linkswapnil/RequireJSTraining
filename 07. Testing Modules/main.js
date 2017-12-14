// Requirejs Configuration Options
require.config({
  // paths: maps ids with paths (no extension)
  paths: {
    'jasmine': ['lib/jasmine'],
    'jasmine-html': ['lib/jasmine-html'],
    'jasmine-boot': ['lib/boot']
  },
  // shim: makes external libraries compatible with requirejs (AMD)
  shim: {
    'jasmine-html': {
      deps : ['jasmine']
    },
    'jasmine-boot': {
      deps : ['jasmine', 'jasmine-html']
    }
  }
});

require(['jasmine-boot'], function () {
  require(['mylibrary.spec'], function(){
    //trigger Jasmine
    window.onload();
  })
});