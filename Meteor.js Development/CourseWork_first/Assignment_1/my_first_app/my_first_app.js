if (Meteor.isClient) {
  var now = new Date(),
        dateString = now.toDateString(),
        time = now.toTimeString();

  Template.time.helpers({dateString: dateString, time: time});
  
}

if (Meteor.isServer) {
}
