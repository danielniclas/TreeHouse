/**
 * Created by Daniel on 6/10/2015.
 */


Blogger.PostsRoute = Ember.Route.extend({

    //controllerName:  'posts',       //  This is DEFAULT behavior
    //renderTemplate: function(){     //  This is DEFAULT behavior
    //    this.render('posts')
    //},


    model: function() {             //  LOAD MODEL  (Not DEFAULT behavior)
        return posts;               //  returns POST ARRAY in our sample data (store.js)
    }                               //  This data is now available in the CONTROLLER and TEMPLATE

    });