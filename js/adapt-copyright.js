define(["coreJS/adapt", "./copyright-view", "./copyright-model"], function(Adapt, CopyrightView, CopyrightModel) {
  // set up your reusable objects here

  // after data has loaded, you can set up your plugin
  Adapt.on("app:dataLoaded", function() {
    Adapt.on("pageView:postRender", function(view) {
      // code in here gets called whenever the view redraws
    });
  });
});
