define(function(require) {
  var CopyrightView = Backbone.View.extend({
    initialize: function() {
      this.model.on("change", this.render, this);
      this.render();
    },
    render: function() {
      var data = this.model.toJSON();
      var template = Handlebars.templates["adaptCopyright"];
      this.$el.html(template(data));
      return this;
    }
  });

  return CopyrightView;
});
