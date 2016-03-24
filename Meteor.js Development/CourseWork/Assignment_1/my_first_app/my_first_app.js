if (Meteor.isClient) {

  var now = (new Date()),
        dateString = now.toDateString(),
        time = now.toTimeString(),
        momentTIME = moment().format('LT'),
        momentDATE = moment().format('MMMM Do YYYY');



  /*Template.time.helpers({dateString: dateString, time: time});*/
  Template.time.helpers({dateString: momentDATE, time: momentTIME});
  
}

if (Meteor.isServer) {
}
