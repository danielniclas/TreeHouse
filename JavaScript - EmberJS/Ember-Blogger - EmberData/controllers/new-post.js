/**
 * Created by Daniel on 6/11/2015.
 */



Blogger.NewPostController = Ember.Controller.extend({

actions:  {

    save: function() {
                                                                    //  Create EMBER DATA OBJECT
        var newPost = this.store.createRecord('post', {             //  MAKE a newPost OBJECT
                                                                    //  first arg:  name of the model we want to create (the post)
                                                                    //  second arg:  value of the properties (as an OBJECT)
                title:  this.get('title'),
                body:  this.get('body')
            });

        newPost.save();                         //  To save the Object into Local Storage (persists to Local Storage) - before we do this the object only exists in memory
        this.transitionToRoute('posts');        //  transition our app to the posts route.  After clicking SAVE the app goes back to the POSTS page


    }

}

});