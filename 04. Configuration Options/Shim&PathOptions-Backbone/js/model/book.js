define([
  'backbone'
], function(Backbone) {
  return Backbone.Model.extend({
    // Intended attributes:
    // title
    // author
    // genre

    defaults: {
      genre: 'historical'
    }
  })
});