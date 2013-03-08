App.ApplicationController = Ember.Controller.extend({
  firstName: "Fayimora",
  lastName: "Femi-Balogun",
  nickname: "DaMainBoss",
  buttonText: "My large button",

  showMessage: function () {
    alert("I am " + this.nickname);
  }
});
