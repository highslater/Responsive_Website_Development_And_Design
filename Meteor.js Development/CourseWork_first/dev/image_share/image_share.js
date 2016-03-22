


if (Meteor.isClient) {
  img_data = {
    img_src : "laptops.jpg",
    img_alt : "some laptops"
  }
  Template.images.helpers(img_data);
}

if (Meteor.isServer) {
  console.log("I am the server");
}
