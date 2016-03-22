![Minion](http://octodex.github.com/images/minion.png)
###Module 1

####Learning outcomes

By the end of this module, you will be able to:
Install Meteor tools
Create and run a Meteor application
Edit a template
Define a template helper
Define template event listeners

####URL for this module
We will be using the Meteor platform (software for building web and mobile apps in JavaScript). 
Meteor's website can be found here: https://www.meteor.com/


####Here is the code written during this module:
image_share_end_module1.zip

####URL for this lesson
Install Meteor: https://www.meteor.com/install

```Console

highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design $ meteor --version
Meteor 1.2.1
highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design $ which meteor
/usr/local/bin/meteor

```

```Console

highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork_first 
$ mkdir dev
highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork_first 
$ cd dev/

highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork_first/dev 
$ meteor create image_share
Created a new Meteor app in 'image_share'.    

To run your new app:                          
  cd image_share                              
  meteor                                      
                                              
If you are new to Meteor, try some of the learning resources here:
  https://www.meteor.com/learn                
                                     

highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork_first/dev 
$ cd image_share/
highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design/Meteor.js Development/
CourseWork_first/dev/image_share $ ls
image_share.css  image_share.html  image_share.js

```
#####image_share.css

```css 

/* CSS declarations go here */

```

#####image_share.html

```HTML

<head>
  <title>image_share</title>
</head>

<body>
  <h1>Welcome to Meteor!</h1>

  {{> hello}}
</body>

<template name="hello">
    <button>Click Me</button>
    <p>You've pressed the button {{counter}} times.</p>
</template>

 ```   

#####image_share.js

```JavaScript

 if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
} 

```   

```Console

highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design/Meteor.js Development/
CourseWork_first/dev/image_share $ meteor
[[[[[ ~/Programming/Coursera/Completed/Responsive_Website_Development_And_Design/Meteor.js
Development/CourseWork_first/dev/image_share ]]]]]

=> Started proxy.                             
=> Started MongoDB.                           
=> Started your app.                          

=> App running at: http://localhost:3000/
^C
highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design/Meteor.js Development/
CourseWork_first/dev/image_share $ 
 
URL for this lesson
Meteor template documentation: http://docs.meteor.com/#/full/livehtmltemplates

```  
#####image_share.html

```HTML

<head>
  <title>image_share</title>
</head>

<body>
  <h1>Welcome to Coursera!</h1>

  {{> images}}
</body>

<template name="images">
  <img src="laptops.jpg" alt="lots of laptop screens"/>
</template>

 ```   
#####image_share.js

```JavaScript

if (Meteor.isClient) {
  console.log("I am the client");
}

if (Meteor.isServer) {
  console.log("I am the server");
}

```
#####image_share.html

```HTML

<head>
  <title>image_share</title>
</head>

<body>
  <h1>Welcome to Meteor!</h1>

  {{> images}}
</body>

<template name="images">
  <img src="{{img_src}}" alt="{{img_alt}}"/>
</template>

```

#####image_share.js

```JavaScript

if (Meteor.isClient) {
  var img_data = {
    img_src : "laptops.jpg",
    img_alt : "some laptops"
  }
  Template.images.helpers(img_data);
}

if (Meteor.isServer) {
  console.log("I am the server");
}


```

#####image_share.html

```HTML

<head>
  <title>image_share</title>
</head>

<body>
  <h1>Welcome to Meteor!</h1>

  {{> images}}
</body>

<template name="images">
{{#each images}}
  <img src="{{img_src}}" alt="{{img_alt}}"/>
{{/each}}

</template>

```

#####image_share.js

```JavaScript

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
}

if (Meteor.isServer) {
  console.log("I am the server");
}

```


URL for this lesson

Search for Meteor packages online: https://atmospherejs.com/

```Console

highslater@mint64 ~/Programming/Coursera/Completed/Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork_first/dev/image_share $ meteor search .
<
<
< CODE OMMITTED >
<
<

You can use 'meteor show' to get more information on a specific item.


highslater@mint64 ~/Programming/Coursera/Completed/Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork_first/dev/image_share $ meteor search twbs
Matching packages:
twbs:bootstrap             The most popular front-end framework for developing responsive, mobil...
twbs:bootstrap-noglyph     Bootstrap without the Glyphicons font (official): the most popular HT...

You can use 'meteor show' to get more information on a specific item.


highslater@mint64 ~/Programming/Coursera/Completed/Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork_first/dev/image_share $ meteor add twbs:bootstrap 
                                              
Changes to your project's package version selections:
                                              
twbs:bootstrap  added, version 3.3.6                                                      
twbs:bootstrap: The most popular front-end framework for developing responsive, mobile first
projects on the web.

```

#####image_share.html

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
        <div class="col-xs-12 col-md-3">
            <div class="thumbnail">
                <img src="{{img_src}}" alt="{{img_alt}}"/>
                <div class="caption">
                    <h3>Thumbnail Label</h3>
                    <p>description of image</p>
                </div>
            </div>
        </div>
        <!-- / col -->
        {{/each}}
    </div>
    <!-- / row -->
</template>

```


#####image_share.js

```JavaScript



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
}

if (Meteor.isServer) {
  console.log("I am the server");
}

```


#####image_share.html

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
        <div class="col-xs-12 col-md-3">
            <div class="thumbnail">
                <img src="{{img_src}}" alt="{{img_alt}}" class="js-image"/>
                <div class="caption">
                    <h3>Thumbnail Label</h3>
                    <p>description of image</p>
                </div>
            </div>
        </div>
        <!-- / col -->
          {{/each}}
    </div>
    <!-- / row -->
</template>

```


#####image_share.js

```JavaScript


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

###Module 1 Assignment:

#####Title: Assignment: Install meteor and edit some templates

####Task 1: Install meteor and create a starter app

Install meteor from this site: https://www.meteor.com/install

Once meteor is installed, open up the console or terminal in your operating system and type the command that will create an example application called my_first_app.

Take a screenshot showing what meteor prints to the console when you run the app creation command.

![Task_1.png]()
Take a screenshot showing what meteor prints to the console when you run the app creation command.
####Task 2: Run the app and view it in your web browser

In the console, run the command to run your newly created meteor app. Point your web browser at the address that meteor tells you your app is running at.

Take another screenshot, showing the app running in your web browser and upload it here. Make sure the address bar of the web browser is visible.
 
![Task_2.png]()

Take another screenshot, showing the app running in your web browser and upload it here. Make sure the address bar of the web browser is visible.
####Task 3: Edit the page heading

Edit the template code (.html file) so that it displays a heading 'Hello from here', where you replace 'here' with the country you are in, e.g. I might say: 'Hello from the UK'.

Upload a screenshot showing how this app looks in the web browser.

![Task_3.png]()

Edit the page heading the upload a screenshot showing how this app looks in the web browser.
####Task 4: Create a template helper

Now edit the template helper (.js file) and template code (.html file) so that the page says 'The time now is: now', replacing 'now' with the current time and date. Note that you can access the time and date in Javascript using 'new Date()'.

Take a screenshot of your web browser running the application and upload it here.

![Task_4.png]()

Take a screenshot of your web browser running the application that says 'The time now is: now', and upload it here.
