/**
 * Created by Daniel on 6/8/2015.
 */


//  CONTROLLER:  Handle display logic of your application
//  Provides two TOOLS:  PROPERTIES and ACTIONS (functions)
//  PROPERTIES can be displayed directly on the page or used as conditionals to determine what part of page is rendered

Blogger.ContactController = Ember.Controller.extend({

    messageSent: false,

    actions: {
        sendMessage: function() {
            var message = prompt ('Type your message here: ');
            this.set('confirmationNumber', Math.round(Math.random() * 100000) );  //  DISPLAY CONTROLLER PROPERTY ON THE PAGE
            this.set('messageSent', true);
        }

    }
});