###Module 2

Welcome to the second module of 'Introduction to Meteor.js Development'! In this course we will be creating Mongo Collections and using Mongo find and insert operations. In addition, we will be looking at how to control a Bootstrap modal from Meteor and we will be using third party Meteor packages to add functionality. Enjoy!

Learning outcomes
By the end of the module you will be able to:

Create Mongo Collections
Use Mongo find and insert operations
Control a Bootstrap modal from Meteor
Use third party Meteor packages to add functionality

URL for this module
Meteor collections: http://docs.meteor.com/#/full/mongo_collection

Here is a zip file containing the application from the videos:
image_share_mod_2.zip

URL for this lesson
Collection.find: http://docs.meteor.com/#/full/find


#####image_share.js

```JavaScript

Images = new Mongo.Collection('images');
console.log(Images.find().count());

if (Meteor.isClient) {
  var img_data = [
  {
      img_src : "laptops.jpg",
      img_alt : "some laptops"
   },
   {
      img_src : "bass.jpg",
      img_alt : "a bass player"
   },
   {
      img_src : "beard.jpg",
      img_alt : "some musicians with beards"
   }

    ];
  Template.images.helpers({images: img_data});

  Template.images.events({
    'click .js-image': function(event){
     $(event.target).css("width", "50px");
    }
  });
}

if (Meteor.isServer) {
  console.log("I am the server");
}

```

```Console

highslater@mint64 ~/Programming/Coursera/Completed/Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork/dev/image_share $ meteor
[[[[[ ~/Programming/Coursera/Completed/Responsive_Website_Development_And_Design/Meteor.js
Development/CourseWork/dev/image_share ]]]]]

=> Started proxy.                             
=> Started MongoDB.                           
=> Started your app.                          

=> App running at: http://localhost:3000/
I20160324-13:58:45.613(-4)? 0
I20160324-13:58:45.615(-4)? I am the server

```