//     this is startup.js

if (Meteor.isServer) {
    Meteor.startup(function() {
        if (Images.find().count() == 0) {
            for (var i = 1; i < 23; i++) {
                Images.insert(
                    {
                        img_src: "img_" + i + ".jpg",
                        img_alt: "image number " + i
                    }
                ); // end of Images.insert
            }// end of for insert images loop
            // count the images
            console.log("startup.js says " + Images.find().count());
        } // end of if have no images
    });  // end of function
} // end of Meteor.isServer