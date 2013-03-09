App.EntriesController = Ember.ArrayController.extend({
  hasContent: false,

  addEntry: function () {
    var entry = Ember.Object.create({name: this.get('newEntry')});
    this.pushObject(entry);
    this.set("newEntry", "");
    this.set("hasContent", true);
  },

  clearList: function () {
    this.set("content", []);
    this.set("hasContent", false);
  }
});
