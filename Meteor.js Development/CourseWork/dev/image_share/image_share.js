
Images = new Mongo.Collection('images');

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });

  Template.images.helpers({images:
    Images.find({}, {sort: {createdOn: -1, rating: -1}}),

    getUser: function(user_id) {
      var user = Meteor.users.findOne({_id: user_id});
      if (user) {
        return user.username;
      }
      else {
        return "anon";
      }
    }

  });

  Template.body.helpers({username: function(){
    if (Meteor.user()) {
      return Meteor.user().username;
    } 
    else {
      return "anonymous internet user";
    }
  }  // end of function
  }); // end of Template.body.helpers


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

    'click .js-rate-image': function(event){
      var rating = $(event.currentTarget).data("userrating");
      // console.log(rating);
      var image_id = this.id;
      // console.log(image_id);

      Images.update({_id: image_id}, 
                             {$set: {rating: rating}});

    }, // end of click .js-rate-image

    'click .js-show-image-form': function(event){
      $('#image_add_form').modal('show');
    }, // end of click .js-show-image-form


  }); // end of Template.images.events


  Template.image_add_form.events({
    'submit .js-add-image' : function(event){
      var img_src, img_alt;
      img_src = event.target.img_src.value;
      img_alt = event.target.img_alt.value;

      if (Meteor.user()){

        Images.insert({
          img_src: img_src,
          img_alt: img_alt,
          createdOn: new Date(),
          createdBy: Meteor.user()._id
        });

      } // end of if (Meteor.user()

      $('#image_add_form').modal('hide');
      return false;
    }

  }); // end of Template.image_add_form.events


} // end of if (Meteor.isClient)