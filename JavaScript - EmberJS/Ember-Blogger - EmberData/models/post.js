/**
 * Created by Daniel on 6/11/2015.
 */


Blogger.Post = DS.Model.extend({                //  POST is the MODEL name

    title: DS.attr(),
    body: DS.attr(),
    comments: DS.hasMany('comment', {async: true})    //  This line sets up a PROPERTY on each instance of Post called comments
                                                       //  returns all of the comments with that posts ID
                                                       //  DS.hasMany() is an Ember data method() - it makes the relationship with the comment MODEL
                                                       //  {async: true} part of relationship with local storage adapter

});