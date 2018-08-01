Template.Person.onCreated(function(){
  this.editMode = new ReactiveVar(false);
})

Template.Person.helpers({
  updatePersonsId: function() {
    return this._id;
  },
  editMode: function() {
    return Template.instance().editMode.get();
  }
});

Template.Person.events({
  'click .toggle-status': function() { // Maina persons isActive statusu uzspiezhot izsaucas toggleStatus
    Meteor.call('toggleStatus', this._id, this.isActive);
  },
  'click .fa-trash': function () {
    Meteor.call('deletePerson', this._id); // izsaucot izdzēš no persons collection
  },
  'click .fa-pencil': function (event, template) { // izsaucot lauj edit konkrētajam templatam...
    template.editMode.set(!template.editMode.get());
  }
});
