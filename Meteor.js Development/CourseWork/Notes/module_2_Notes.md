#Introduction to Meteor.js Development

##Module 2

Welcome to the second module of 'Introduction to Meteor.js Development'! In this course we will be creating Mongo Collections and using Mongo find and insert operations. In addition, we will be looking at how to control a Bootstrap modal from Meteor and we will be using third party Meteor packages to add functionality. Enjoy!

###Learning outcomes:

By the end of the module you will be able to:

Create Mongo Collections
Use Mongo find and insert operations
Control a Bootstrap modal from Meteor
Use third party Meteor packages to add functionality

####URL for this module: 
Meteor collections: http://docs.meteor.com/#/full/mongo_collection

Here is a zip file containing the application from the videos:
image_share_mod_2.zip

####URL for this lesson
Collection.find: http://docs.meteor.com/#/full/find

#####Create a collection of images

######image_share.js

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

######image_share.js

```JavaScript


if (Meteor.isServer) {
    Meteor.startup(function() {
        if (Images.find().count() == 0){
            Images.insert(
                {
                      img_src : "laptops.jpg",
                      img_alt : "some laptops"
                }),
            Images.insert(
                {
                      img_src : "img_1.jpg",
                      img_alt : "image 1"
                }),
            Images.insert(
                {
                      img_src : "img_2.jpg",
                      img_alt : "image 2"
                });


        }

    });
}

```

######image_share.html

```HTML



<head>
  <title>image_share</title>
</head>

<body>
  <h1>Welcome to Meteor!</h1>
    <div class="container">
          {{> images}}
    </div>
    <!-- / container -->
</body>
        
<template name="images">
    <div class="row">
        {{#each images}}
        <div class="col-xs-12 col-md-3" id="{{_id}}">
            <div class="thumbnail">
                <img src="{{img_src}}" alt="{{img_alt}}" class="js-image"/>
                <div class="caption">
                    <h3>Thumbnail Label</h3>
                    <p>description of image</p>
                    <button class="js-del-image btn btn-warning">delete</button>
                </div>
            </div>
        </div>
        <!-- / col -->
          {{/each}}
    </div>
    <!-- / row -->
</template>

```

######image_share.js 

```JavaScript


Images = new Mongo.Collection('images');
/*console.log(Images.find().count());*/

if (Meteor.isClient) {

  Template.images.helpers({images: Images.find()});

  Template.images.events({
    'click .js-image': function(event){
     $(event.target).css("width", "50px");
    },
    'click .js-del-image': function(event){
      var image_id = this._id;
      /*console.log(image_id);*/
      $('#' + image_id).hide('slow', function(){
        Images.remove({_id: image_id});
      })
      
    }

  });
}

```
######startup.js 

```JavaScript

if (Meteor.isServer) {
    Meteor.startup(function() {
        if (Images.find().count() == 0){

            for (var i = 1; i < 23; i++){
                Images.insert(
                    {
                          img_src : "img_" + i + ".jpg",
                          img_alt : "image number" + i
                    }
                );// end of Images.insert
            }// end of for loop
            console.log("startup.js says..." + Images.find().count());
        }// end of if have no images
    });// end of Meteor.startup function
}// end of if Meteor.isServer

```

######image_share.css

```CSS

/* CSS declarations go here */

.thumbnail {
    min-height: 500px;
    max-height: 500px;
}

```

####URL for this lesson
Collection.find: http://docs.meteor.com/#/full/find
