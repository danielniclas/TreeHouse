/**
 * Created by Daniel on 6/11/2015.
 */


Blogger.PostRoute = Ember.Route.extend({

    model: function(params) {

        return this.store.find('post', params.post_id);     //  this.store returns the data store - Ember data's way of referring to where we save things
                                                            //  find() METHOD and pass in name of MODEL as a string - This will return every instance of the post MODEL
    }

});