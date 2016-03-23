if (Meteor.isClient) {
  var now = new Date();
  var dateString = now.toDateString();
  var time = now.toTimeString();

  Template.time.helpers({dateString: dateString, time: time});
}

if (Meteor.isServer) {
}
