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
