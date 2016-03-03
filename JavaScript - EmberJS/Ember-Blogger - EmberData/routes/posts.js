/**
 * Created by Daniel on 6/10/2015.
 */


Blogger.PostsRoute = Ember.Route.extend({


    model: function() {

        return this.store.find('post');     //  this.store returns the data store - Ember data's way of referring to where we save things
                                            //  find() METHOD and pass in name of MODEL as a string - This will return every instance of the post MODEL


    }

    });