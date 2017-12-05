define(["coreJS/adapt", "./copyright-view", "./copyright-model"], function(Adapt, CopyrightView, CopyrightModel) {
  // set up your reusable objects here
  var copyrightModel = new CopyrightModel();
  var copyrightView = new CopyrightView({model: copyrightModel});

  // after data has loaded, you can set up your plugin
  Adapt.on("app:dataLoaded", function() {
    Adapt.on("pageView:postRender", function(view) {
      // code in here gets called whenever the view redraws
      var copyright = Adapt.course.get("_copyright");
      copyrightModel.set("isEnabled", copyright._isEnabled);

      var replace = copyright.message.replace("{{year}}", (new Date()).getFullYear());
      copyrightModel.set("message", replace);

      view.$el.append(copyrightView.$el);
    });
  });
});
