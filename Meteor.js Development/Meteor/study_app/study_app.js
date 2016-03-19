Images = new Mongo.Collection("images");

if (Meteor.isClient) {

    Template.images.helpers({
        images: Images.find({}, {
            sort: {
                createdOn: -1,
                rating: -1
            }
        })
    }); // end of  Template.images.helpers({

    Template.images.events({
        'click .js-image': function (event) {
            "use strict";
            $(event.target).css("width", "50px");
        }, // end of 'click .js-image': function (event) {

        'click .js-del-image': function (event) {
            "use strict";
            var image_id = this._id;
            console.log(image_id);
            $("#" + image_id).hide('slow', function () {
                "use strict";
                Images.remove({
                    "_id": image_id
                }); // end of Images.remove({
            }); // end of $("#" + image_id).hide('slow', function () {
        }, // end of 'click .js-del-image': function (event) {

        'click .js-rate-image': function (event) {
            "use strict";
            var rating = $(event.currentTarget).data("userrating");
            console.log(rating);
            var image_id = this.mongo_id;
            console.log(image_id);
            Images.update({
                _id: image_id
            }, {
                $set: {
                    rating: rating
                }
            });
        }, // end of 'click .js-rate-image': function (event) {

        'click .js-show-image-form': function (event) {
            "use strict";
            $("#image_add_form").modal('show');
        },



    }); // end of  Template.images.events({

    Template.image_add_form.events({
        'submit .js-add-image': function (event) {
            "use strict";
            var img_src, img_alt;
            img_src = event.target.img_src.value;
            img_alt = event.target.img_alt.value;
            console.log("src: " + img_src, "alt: " + img_alt);

            Images.insert({
                img_src: img_src,
                img_alt: img_alt,
                createdOn: new Date(),
            });
            $("#image_add_form").modal('hide');

            return false;
        }, // end of 'submit .js-add-image': function (event) {
    }); // end of Template.image_add_form.events({
}; // end of if (Meteor.isClient) {





/*

{>starsRating class="js-rate-image" mutable=true}}

{{>starsRating mutable=true rating=rating class="js-rate-image" data-mongo-id=_id}}

var image_id = $(this).attr("data-mongo-id");

*/