/**
 * Created by Daniel on 6/11/2015.
 */


Blogger.PostRoute = Ember.Route.extend({

    model: function(params) {

        return posts.findBy('id', params.post_id);          //  finBy() METHOD is EMBER unique
                                                            //  Pass 'id' to look at the id PROPERTY of all elements in the post ARRAY
                                                            //  Will look for:  params.post.id
                                                            //  params.post.id will return:  3
                                                            //  MODEL will return the OBJECT in the posts ARRAY whose id property is value 3
    }

});