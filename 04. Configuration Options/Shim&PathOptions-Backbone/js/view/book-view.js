define([
  'backbone',
  'underscore'
], function(Backbone, _) {
  return Backbone.View.extend({
    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html('Title: ' + this.model.get('title') +
        '; Author: ' + this.model.get('author'));
    }
  });
});