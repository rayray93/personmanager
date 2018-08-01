import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Persons = new Mongo.Collection('persons'); // Izveido persons collection

// Ļauj user tikai pievienot personas..

Persons.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
});

// Persons Schema autoformai...

PersonsSchema = new SimpleSchema({
    name: {
        label: "Name",
        type: String
    },
    age: {
        label: "Age",
        type: SimpleSchema.Integer,
        max: 120,
        min: 1
    },
    isActive: {
        label: "Check active person",
        type: Boolean,
        defaultValue: false,
        optional: true
    },
     author: {
         type: String,
         label: "Author",
         autoform: {
             type: "hidden"
         },
         autoValue: function(){
             return this.userId;
         },
     },
    createdAt: {
        type: Date,
        label: "CreatedAt",
        autoform: {
              type: "hidden"
          },
          autoValue: function() {
              return new Date();
          }
    }
});

// Update prieks editing...

Meteor.methods({
  toggleStatus: function(id, currentState){ // toggle true/false
    Persons.update(id, {
      $set: {
        isActive: !currentState
      }
    });
  },
  deletePerson: function (id){ // delete person
    Persons.remove(id);
  }
});

Persons.attachSchema(PersonsSchema);
