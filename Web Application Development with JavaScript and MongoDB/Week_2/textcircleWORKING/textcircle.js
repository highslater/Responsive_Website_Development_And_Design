/*this is textcircle.js*/

this.Documents = new Mongo.Collection("documents");

if (Meteor.isClient) {
    Template.editor.helpers({
        docid: function () {
            var doc = Documents.findOne();
            if (doc){
                return doc._id;
            }
            else {
                return undefined;
            }
        },
        config: function() {
            return function(editor){
                editor.setOption("lineNumbers", true);
                editor.setOption("mode", "html");
                editor.on('change', function(cm_editor, info){
                    console.log(cm_editor.getValue());
                    $("#viewer_iframe").contents().find("html").html(cm_editor.getValue())
                });
                
            }
        },
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        if (!Documents.findOne()){
          Documents.insert({title: "my new document"});
        }
    });
}
