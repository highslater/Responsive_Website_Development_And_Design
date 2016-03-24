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