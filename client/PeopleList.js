Template.PeopleList.onCreated(function() {
  var self = this;
  self.autorun(function(){
    self.subscribe('persons');
  });
});

Template.PeopleList.helpers({
  personAdd: ()=> {
    return Persons.find();
  }
});
