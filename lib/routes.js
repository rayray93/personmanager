// Nosūta user uz īsto vietu pēc ielogošanas

if(Meteor.isClient) {
  Accounts.onLogin(function() {
    FlowRouter.go('persons-manager');
  });

  Accounts.onLogout(function() {
    FlowRouter.redirect('/');
  });
};

// Ja users nav ielogojies redirect home...

FlowRouter.triggers.enter([function(context, redirect){
  if(!Meteor.userId()){
    FlowRouter.go('home');
  }
}]);

// home FlowRouter

FlowRouter.route('/', {
  name: 'home',
  action: function() {
    if(Meteor.userId()){ // ja user ir ielogojies tad go persons-manager
      FlowRouter.go('persons-manager');
    }
    GAnalytics.pageview();
    BlazeLayout.render('HomeLayout');
  }
});

// persons-manager FlowRouter

FlowRouter.route('/persons-manager', {
  name: 'persons-manager',
  action: function() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'Persons'});
  }
});


// people-lis FlowRouter

FlowRouter.route('/people-list', {
  name: 'people-list',
  action: function() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'PeopleList'});
  }
});

// add-person FlowRouter

FlowRouter.route('/add-person', {
  name: 'add-person',
  action: function() {
    GAnalytics.pageview();
    BlazeLayout.render('MainLayout', {main: 'AddPerson'});
  }
});
