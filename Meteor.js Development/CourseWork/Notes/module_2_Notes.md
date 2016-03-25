#Introduction to Meteor.js Development  
##Module 2

Welcome to the second module of 'Introduction to Meteor.js Development'! In this course we will be creating  
Mongo Collections and using Mongo find and insert operations. In addition, we will be looking at how to control a Bootstrap modal from Meteor and we will be using third party Meteor packages to add functionality. Enjoy!

###Learning outcomes:

By the end of the module you will be able to:

Create Mongo Collections
Use Mongo find and insert operations
Control a Bootstrap modal from Meteor
Use third party Meteor packages to add functionality

####URL for this module: 
Meteor collections:  
http://docs.meteor.com/#/full/mongo_collection

Here is a zip file containing the application from the videos:
image_share_mod_2.zip

####URL for this lesson
Collection.find:  
http://docs.meteor.com/#/full/find

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

highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork/dev/image_share 
$ meteor
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
Collection.find:  
http://docs.meteor.com/#/full/find

#####Add an imagine rating function: Updating and sorting

```Console

highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork/dev/image_share 
$ meteor add barbatus:stars-rating
                                              
Changes to your project's package version selections:
                                              
barbatus:stars-rating  added, version 1.0.7   
less                   added, version 2.5.1
                                         
barbatus:stars-rating: Stars rating control  

highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork/dev/image_share 
$ meteor list

autopublish            1.0.4  (For prototyping only) Publish the entire datab...
barbatus:stars-rating  1.0.7  Stars rating control
blaze-html-templates   1.0.1  Compile HTML templates into reactive UI with Me...
ecmascript             0.1.6* Compiler plugin that supports ES2015+ in all .j...
es5-shim               4.1.14  Shims and polyfills to improve ECMAScript 5 su...
insecure               1.0.4  (For prototyping only) Allow all database write...
jquery                 1.11.4  Manipulate the DOM using CSS selectors
meteor-base            1.0.1  Packages that every Meteor app needs
mobile-experience      1.0.1  Packages for a great mobile user experience
mongo                  1.1.3  Adaptor for using MongoDB and Minimongo over DDP
session                1.1.1  Session variable
standard-minifiers     1.0.2  Standard minifiers used with Meteor apps by def...
tracker                1.0.9  Dependency tracker to allow reactive callbacks
twbs:bootstrap         3.3.6  The most popular front-end framework for develo...
                                           
* New versions of these packages are available! Run 'meteor update' to try to
  update those packages to their latest versions. If your packages cannot be
  updated further, try typing `meteor add <package>@<newVersion>` to see more
  information.

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
                    <h3>Rating: {{rating}}</h3>
                    <p>description of image</p>
                    <p>{{> starsRating mutable=true class="js-rate-image" id=_id }}</p>
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

if (Meteor.isClient) {

  Template.images.helpers({images:
    Images.find({}, {sort: {rating: -1}})
  });

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
      console.log(rating);
      var image_id = this.id;
      console.log(image_id);

      Images.update({_id: image_id}, {$set: {rating: rating}});
    }, // end of click .js-rate-image

  }); // end of Template.images.events
} // end of if (Meteor.isClient)

```