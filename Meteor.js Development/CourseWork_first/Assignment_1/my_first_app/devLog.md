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