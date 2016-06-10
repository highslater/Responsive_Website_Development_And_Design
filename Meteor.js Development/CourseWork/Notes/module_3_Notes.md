#Introduction to Meteor.js Development  
##Module 3

Welcome to the third module of 'Introduction to Meteor.js Development!'. In this module we will be looking at adding a user authentication to your Meteor app and learning how to use Mongo filters. Finally, we will be using the Meteor reactive Session variable and we will implement an infinite scroll. Enjoy!

###Learning outcomes

By the end of this module, you will be able to:

  * Add user authentication to your Meteor app
  * Use Mongo filters
  * Use the Meteor reactive session variable
  * Implement an infinite scroll    


Here are two zip files. The first one contains the code for the application. The second one contains the images. Place the image files inside the public folder in the application. We have separated them so you can download only the code if you already have the images.

  * images.zip
  * image_share_wk3.zip


####User authentication with Meteor.js



```Console

highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork/dev/image_share 
$ meteor add accounts-ui accounts-password
                                              
Changes to your project's package version selections:
                                              
accounts-base          added, version 1.2.2   
accounts-password      added, version 1.1.4
accounts-ui            added, version 1.1.6
accounts-ui-unstyled   added, version 1.1.8
ddp-rate-limiter       added, version 1.0.0
email                  added, version 1.0.8
localstorage           added, version 1.0.5
npm-bcrypt             added, version 0.7.8_2
rate-limit             added, version 1.0.0
service-configuration  added, version 1.0.5
sha                    added, version 1.0.4
srp                    added, version 1.0.4

                                              
accounts-ui: Simple templates to add login widgets to an app
accounts-password: Password support for accounts

```


###### image_share.html

```HTML

<head>
  <title>image_share</title>
</head>

<body>
{{> image_add_form}}
    <div class="container">
    <h1>Welcome to image share!</h1>
    <p>{{> loginButtons}}</p>
    <br>
    {{> images}}
    </div><!-- / container -->
</body>

<template name="image_add_form">

<div class="modal fade" id="image_add_form">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">
        </div><!-- end of modal-title -->
      </div><!-- end of modal-header -->

      <div class="modal-body">
        <form class="js-add-image">
              <input type="text" name="img_src" placeholder=" image URL">
              <br>
              <input type="text" name="img_alt" placeholder=" image alt text">
              <button class="btn btn-success">save</button> 
        </form> 
      </div><!-- end of modal-body -->

        <div class="modal-footer">
        <button class="btn btn-warning" data-dismiss="modal">cancel</button>
        <!-- this works because of the data-dismiss attribute -->
        </div><!-- end of modal-footer -->
    </div><!-- end of modal-content -->
  </div><!-- end of modal-dialog -->
</div><!-- end of modal fade -->
</template>
        
<template name="images">
<button class="btn btn-success js-show-image-form">add image</button>
<hr>
    <div class="row">
        {{#each images}}
        <div class="col-xs-12 col-md-3" id="{{_id}}">
            <div class="thumbnail">
                <img src="{{img_src}}" alt="{{img_alt}}" class="js-image"/>
                <div class="caption">
                    <h3>Rating: {{rating}}</h3>
                    <p>{{img_alt}}</p>
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

####Tidying up the design with a navbar:

######image_share.html  
```HTML  
  

<head>
  <title>image_share</title>
</head>

<body>
  {{> image_add_form}}

<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    {{> loginButtons}}
  </div><!-- / container -->
</nav><!-- / navbar -->

    <div class="container">
    <h1>Welcome to image share!</h1>
    {{> images}}
    </div><!-- / container -->
</body>

<template name="image_add_form">

<div class="modal fade" id="image_add_form">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">
        </div><!-- end of modal-title -->
      </div><!-- end of modal-header -->

      <div class="modal-body">
        <form class="js-add-image">
              <input type="text" name="img_src" placeholder=" image URL">
              <br>
              <input type="text" name="img_alt" placeholder=" image alt text">
              <button class="btn btn-success">save</button> 
        </form> 
      </div><!-- end of modal-body -->

        <div class="modal-footer">
        <button class="btn btn-warning" data-dismiss="modal">cancel</button>
        <!-- this works because of the data-dismiss attribute -->
        </div><!-- end of modal-footer -->
    </div><!-- end of modal-content -->
  </div><!-- end of modal-dialog -->
</div><!-- end of modal fade -->
 
</template>
        
<template name="images">
<button class="btn btn-success js-show-image-form">add image</button>
<hr>
    <div class="row">
        {{#each images}}
        <div class="col-xs-12 col-md-3" id="{{_id}}">
            <div class="thumbnail">
                <img src="{{img_src}}" alt="{{img_alt}}" class="js-image thumbnail-img"/>
                <div class="caption">
                    <h3>Rating: {{rating}}</h3>
                    <p>{{img_alt}}</p>
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


######image_share.css 

```CSS  

/* CSS declarations go here */

.thumbnail {
    min-height: 500px;
    max-height: 500px;
}

.thumbnail-img {
    max-height: 300px;
}

body {
    padding-top: 60px;
}

```


#####URL for this lesson:  
Meteor.user() function: http://docs.meteor.com/#/full/meteor_user

####Accessing user information

######image_share.html  

```HTML

<head>
  <title>image_share</title>
</head>

<body>
  {{> image_add_form}}

<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    {{> loginButtons}}
  </div><!-- / container -->
</nav><!-- / navbar -->

    <div class="container">
    <h1>Welcome to image share {{username}}!</h1>
    {{> images}}
    </div><!-- / container -->
</body>

<template name="image_add_form">

<div class="modal fade" id="image_add_form">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">
        </div><!-- end of modal-title -->
      </div><!-- end of modal-header -->

      <div class="modal-body">
        <form class="js-add-image">
              <input type="text" name="img_src" placeholder=" image URL">
              <br>
              <input type="text" name="img_alt" placeholder=" image alt text">
              <button class="btn btn-success">save</button> 
        </form> 
      </div><!-- end of modal-body -->

        <div class="modal-footer">
        <button class="btn btn-warning" data-dismiss="modal">cancel</button>
        <!-- this works because of the data-dismiss attribute -->
        </div><!-- end of modal-footer -->
    </div><!-- end of modal-content -->
  </div><!-- end of modal-dialog -->
</div><!-- end of modal fade -->
 
</template>
        
<template name="images">
{{#if currentUser}}
<button class="btn btn-success js-show-image-form">add image</button>
{{/ if}}
<hr>
    <div class="row">
        {{#each images}}
        <div class="col-xs-12 col-md-3" id="{{_id}}">
            <div class="thumbnail">
                <img src="{{img_src}}" alt="{{img_alt}}" class="js-image thumbnail-img"/>
                <div class="caption">
                    <h3>Rating: {{rating}}</h3>
                    <p>{{img_alt}}</p>
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
    Images.find({}, {sort: {createdOn: -1, rating: -1}})
  });

  Template.body.helpers({username: function(){
    if (Meteor.user()) {
      return Meteor.user().emails[0].address;
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

      Images.insert({
        img_src: img_src,
        img_alt: img_alt,
        createdOn: new Date()
      })
      $('#image_add_form').modal('hide');
      return false;
    }

  }); // end of Template.image_add_form.events


} // end of if (Meteor.isClient)

```


####URL for this lesson:  
Accounts.ui.config:  
http://docs.meteor.com/#/full/accounts_ui_config

####Customising the user registration form  

######image_share.js  

```JavaScript



Images = new Mongo.Collection('images');

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });

  Template.images.helpers({images:
    Images.find({}, {sort: {createdOn: -1, rating: -1}})
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

      Images.insert({
        img_src: img_src,
        img_alt: img_alt,
        createdOn: new Date()
      })
      $('#image_add_form').modal('hide');
      return false;
    }

  }); // end of Template.image_add_form.events


} // end of if (Meteor.isClient)

```


####Attaching users to images  


######image_share.html  

```HTML


<head>
  <title>image_share</title>
</head>

<body>
  {{> image_add_form}}

<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    {{> loginButtons}}
  </div><!-- / container -->
</nav><!-- / navbar -->

    <div class="container">
    <h1>Welcome to image share {{username}}!</h1>
    {{> images}}
    </div><!-- / container -->
</body>

<template name="image_add_form">

<div class="modal fade" id="image_add_form">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">
        </div><!-- end of modal-title -->
      </div><!-- end of modal-header -->

      <div class="modal-body">
        <form class="js-add-image">
              <input type="text" name="img_src" placeholder=" image URL">
              <br>
              <input type="text" name="img_alt" placeholder=" image alt text">
              <button class="btn btn-success">save</button> 
        </form> 
      </div><!-- end of modal-body -->

        <div class="modal-footer">
        <button class="btn btn-warning" data-dismiss="modal">cancel</button>
        <!-- this works because of the data-dismiss attribute -->
        </div><!-- end of modal-footer -->
    </div><!-- end of modal-content -->
  </div><!-- end of modal-dialog -->
</div><!-- end of modal fade -->
 
</template>
        
<template name="images">
{{#if currentUser}}
<button class="btn btn-success js-show-image-form">add image</button>
{{/ if}}
<hr>
    <div class="row">
        {{#each images}}
        <div class="col-xs-12 col-md-3" id="{{_id}}">
            <div class="thumbnail">
                <img src="{{img_src}}" alt="{{img_alt}}" class="js-image thumbnail-img"/>
                <div class="caption">
                    <h3>Rating: {{rating}}</h3>
                    <p>{{img_alt}}</p>
                    <p>User: {{getUser createdBy}}</p>
                    <p>{{> starsRating mutable=true class="js-rate-image" id=_id }}</p>
                    <button class="js-del-image btn btn-warning">delete</button>
                </div>
            </div>
        </div><!-- / col -->
          {{/each}}
    </div><!-- / row -->
</template>


```

######image_share.js  

```JavaScript


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


```


####URLs for this lesson

More details on MongoDB filters:  
http://docs.mongodb.org/manual/reference/method/db.collection.find/  

Meteor Sessions:  
http://docs.meteor.com/#/full/session

####Filtering images by user  


######image_share.html  

```HTML



<head>
  <title>image_share</title>
</head>

<body>
  {{> image_add_form}}

<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
    {{> loginButtons}}
  </div><!-- / container -->
</nav><!-- / navbar -->

    <div class="container">
    <h1>Welcome to image share {{username}}!</h1>
    {{> images}}
    </div><!-- / container -->
</body>

<template name="image_add_form">

<div class="modal fade" id="image_add_form">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">
        </div><!-- end of modal-title -->
      </div><!-- end of modal-header -->

      <div class="modal-body">
        <form class="js-add-image">
              <input type="text" name="img_src" placeholder=" image URL">
              <br>
              <input type="text" name="img_alt" placeholder=" image alt text">
              <button class="btn btn-success">save</button> 
        </form> 
      </div><!-- end of modal-body -->

        <div class="modal-footer">
        <button class="btn btn-warning" data-dismiss="modal">cancel</button>
        <!-- this works because of the data-dismiss attribute -->
        </div><!-- end of modal-footer -->
    </div><!-- end of modal-content -->
  </div><!-- end of modal-dialog -->
</div><!-- end of modal fade -->
 
</template>
        
<template name="images">
{{#if currentUser}}
<button class="btn btn-success js-show-image-form">add image</button>
{{/ if}}
<hr>
    <div class="row">
        {{#each images}}
        <div class="col-xs-12 col-md-3" id="{{_id}}">
            <div class="thumbnail">
                <img src="{{img_src}}" alt="{{img_alt}}" class="js-image thumbnail-img"/>
                <div class="caption">
                    <h3>Rating: {{rating}}</h3>
                    <p>{{img_alt}}</p>
                    <p><a href="#" class="js-set-image-filter">{{getUser createdBy}}</a></p>
                    <p>{{> starsRating mutable=true class="js-rate-image" id=_id }}</p>
                    <button class="js-del-image btn btn-warning">delete</button>
                </div>
            </div>
        </div><!-- / col -->
          {{/each}}
    </div><!-- / row -->
</template>

```

######image_share.js  

```JavaScript


Images = new Mongo.Collection('images');

if (Meteor.isClient) {
  Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_EMAIL"
  });

  Template.images.helpers({

    images: function(){
      if (Session.get("userFilter")){
        return Images.find({createdBy: Session.get("userFilter")}, {sort: {createdOn: -1, rating: -1}});
      }
      else {
        return Images.find({}, {sort: {createdOn: -1, rating: -1}});
      }
    },


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

    'click .js-set-image-filter' : function(event) {
      Session.set("userFilter", this.createdBy)
    }, // end of click .js-set-image-filter


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

```

####Removing the image filter  
