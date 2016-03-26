#Introduction to Meteor.js Development  
##Module 3

Welcome to the third module of 'Introduction to Meteor.js Development!'. In this module we will be looking at adding a user authentication to your Meteor app and learning how to use Mongo filters. Finally, we will be using the Meteor reactive Session variable and we will implement an infinite scroll. Enjoy!

###Learning outcomes

By the end of this module, you will be able to:

  * Add user authentication to your Meteor app
  * Use Mongo filters
  * Use the Meteor reactive session variable
  * Implement an infinite scroll    


Here are two zip files. The first one contains the code for the application. The second one contains the images. Place the image files inside the public folder in the application. We have separated them so you can download only the code if you already have the images.

  * images.zip
  * image_share_wk3.zip


####User authentication with Meteor.js



```Console

highslater@mint64 ~/Programming/Coursera/Completed/
Responsive_Website_Development_And_Design/Meteor.js Development/CourseWork/dev/image_share 
$ meteor add accounts-ui accounts-password
                                              
Changes to your project's package version selections:
                                              
accounts-base          added, version 1.2.2   
accounts-password      added, version 1.1.4
accounts-ui            added, version 1.1.6
accounts-ui-unstyled   added, version 1.1.8
ddp-rate-limiter       added, version 1.0.0
email                  added, version 1.0.8
localstorage           added, version 1.0.5
npm-bcrypt             added, version 0.7.8_2
rate-limit             added, version 1.0.0
service-configuration  added, version 1.0.5
sha                    added, version 1.0.4
srp                    added, version 1.0.4

                                              
accounts-ui: Simple templates to add login widgets to an app
accounts-password: Password support for accounts

```

