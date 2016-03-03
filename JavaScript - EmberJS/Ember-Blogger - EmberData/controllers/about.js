/**
 * Created by Daniel on 6/8/2015.
 */


//  Define CONTROLLERS as properties on our main Ember application:
//  Naming convention:  Controller name MUST be the capitalized version of the route name with Controller added to the end


//  CONTROLLER:  Handle display logic of your application
//  Provides two TOOLS:  PROPERTIES and ACTIONS (functions)
//  PROPERTIES can be displayed directly on the page or used as conditionals to determine what part of page is rendered

Blogger.AboutController = Ember.Controller.extend({

//  Properties:

    isPictureShowing:  false,

    actions: {
        showRealName:function() {
            alert('Dracula is fictional, but was inspired by the 15th-century Romanian general and Wallachian Prince' +
            'Vlad III the Impaler.');
        },
        showPicture:  function() {
            this.set('isPictureShowing', true);    //  to change a property on the controller this.set('property name', new property value)
        },
        hidePicture:  function() {
            this.set('isPictureShowing', false);
        }
    }


});

