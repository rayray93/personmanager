// Subscribe published persons

//Meteor.subscribe('persons');

// Template level subscribtions
Template.Persons.onCreated(function() {
  var self = this;
  self.autorun(function(){
    self.subscribe('persons');
  });
});

Template.Persons.helpers({
  persons: ()=> {
    return Persons.find({});
  }
});

Template.Persons.events({
  'click .new-person': function() {
    Session.set('newPerson', true);
  }
});
