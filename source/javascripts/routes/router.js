App.Router.map(function() {
  this.route("entries", {path: "/"});
});

App.EntriesRoute = Ember.Route.extend({
  setupController: function (controller) {
    controller.set('content', []);
  }
});
