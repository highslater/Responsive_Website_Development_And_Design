###my_first_app


#####my_first_app.html

```HTML

<head>
  <title>my_first_app</title>
</head>

<body>
  {{> time}}
</body>

<template name="time">
    <h1>The Time Now Is:</h1>
    <h3>{{dateString}}</h3>
    <h2>{{time}}</h2>
    <hr>
</template>

```


#####my_first_app.js

```JavaScript

if (Meteor.isClient) {
  var now = new Date();
  var dateString = now.toDateString();
  var time = now.toTimeString();

  Template.time.helpers({dateString: dateString, time: time});
}

if (Meteor.isServer) {
}

```


#####my_first_app.js

```CSS

/* CSS declarations go here */

body {
    background: black;
    color: white;
}

```

```Console
highslater@mint64 ~/Programming/Coursera/Completed/Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork_first/Assignment_1/my_first_app $ meteor add momentjs:moment
                                                                                   
Changes to your project's package version selections:                                            
momentjs:moment  added, version 2.12.0                                                     
momentjs:moment: Moment.js (official): parse, validate, manipulate, and display dates -
official Meteor packaging


highslater@mint64 ~/Programming/Coursera/Completed/Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork_first/Assignment_1/my_first_app $ meteor list
autopublish           1.0.4  (For prototyping only) Publish the entire database to all clients
blaze-html-templates  1.0.1  Compile HTML templates into reactive UI with Meteor Blaze
ecmascript            0.1.6* Compiler plugin that supports ES2015+ in all .js files
es5-shim              4.1.14  Shims and polyfills to improve ECMAScript 5 support
insecure              1.0.4  (For prototyping only) Allow all database writes from the client
jquery                1.11.4  Manipulate the DOM using CSS selectors
meteor-base           1.0.1  Packages that every Meteor app needs
mobile-experience     1.0.1  Packages for a great mobile user experience
momentjs:moment       2.12.0  Moment.js (official): parse, validate, manipulate, and display ...
mongo                 1.1.3  Adaptor for using MongoDB and Minimongo over DDP
session               1.1.1  Session variable
standard-minifiers    1.0.2  Standard minifiers used with Meteor apps by default.
tracker               1.0.9  Dependency tracker to allow reactive callbacks

* New versions of these packages are available! Run 'meteor update' to try to update those
packages to their latest versions. If your packages cannot be updated further, try typing
`meteor add <package>@<newVersion>` to see more information.

```


```JavaScript

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

```