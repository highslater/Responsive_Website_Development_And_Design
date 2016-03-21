##Module 1

###Learning outcomes

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

```Shell

highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design $ meteor --version
Meteor 1.2.1
highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design $ which meteor
/usr/local/bin/meteor

```

```Shell

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

```Shell

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

```HTML

<head>
  <title>image_share</title>
</head>

<body>
  <h1>Welcome to Meteor!</h1>

  {{> images}}
</body>

<template name="images">
  <img src="laptops.jpg" alt="lots of laptop screens"/>
</template>

 ```   

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