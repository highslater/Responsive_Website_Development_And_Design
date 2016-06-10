#Web Application Development with JavaScript and MongoDB
##MongoDB, Meteor and reactive data
###Learning outcomes  
####By the end of this module, you will be able to:

#####Access MongoDB on the command line
#####Understand how to check for valid returns from find queries
#####Identify reactive data sources within the Meteor framework
#####Use the Session object to store user data
#####Understand variable scope
#####Use iframes to embed separate web pages

###TextCircle

######Console Output

```Console
highslater@mint64 ~/Week_1_COMPLETED/textcircle_ARCHIVED
$ meteor create textcircle

Created a new Meteor app in 'textcircle'.     
To run your new app:                          
  cd textcircle                               
  meteor                                                                                 
If you are new to Meteor, try some of the learning resources here:
  https://www.meteor.com/learn     

```

######textcircle/main.html  

```HTML  

<head>
    <title>TextCircle</title>
</head>

<body>
    <h1>Welcome to TextCircle!</h1> {{> editor}}
</body>
<template name="editor">
    {{>sharejsCM docid=docid id="editor"}}
</template>

```

######textcircle/textcircle.js  

```JavaScript 

/*this is textcircle.js*/
this.Documents = new Mongo.Collection("documents");

if (Meteor.isClient) {
    Template.editor.helpers({
        docid: function() {
                var doc = Documents.findOne();
                if (doc) {
                    return doc._id;
                } else {
                    return undefined
                }
            } // end of docid
    }); // end of Template.editor.helpers
} // end of if (Meteor.isClient)

if (Meteor.isServer) {
    Meteor.startup(function() {
        if (!Documents.findOne()) {
            Documents.insert({ title: "my new document" });
        }
    });
} // end of if (Meteor.isServer)

```



































