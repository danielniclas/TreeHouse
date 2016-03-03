/**
 * Created by Daniel on 6/11/2015.
 */



Blogger.Comment = DS.Model.extend({

    text: DS.attr,
    post: DS.belongsTo('post', {async: true})       //  now if you take a comment object and access the post property it will return the post
                                                    //  whose ID matches the post ID store in the comment

});


//  Ember Data automatically sets the ID