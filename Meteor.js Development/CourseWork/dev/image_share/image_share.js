
Images = new Mongo.Collection('images');

if (Meteor.isClient) {

  Template.images.helpers({images: Images.find()});

  Template.images.events({

    'click .js-image': function(event){
     $(event.target).css("width", "50px");
    }, // end of click .js-image

    'click .js-del-image': function(event){
      var image_id = this._id;
      $('#' + image_id).hide('slow', function(){
        Images.remove({_id: image_id});
      }) // end of function
    }, // end of click .js-del-image

  }); // end of Template.images.events

} // end of if (Meteor.isClient)