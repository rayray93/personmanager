Meteor.publish('persons', function() {
  return Persons.find({author: this.userId});
});
