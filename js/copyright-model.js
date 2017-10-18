define(function(require) {
  var CopyrightModel = Backbone.Model.extend({
    defaults: {
      isEnabled: false,
      message: ""
    }
  });

  return CopyrightModel;
});
