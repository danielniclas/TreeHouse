/**
 * Created by Daniel on 6/11/2015.
 */


Blogger.PostsController = Ember.ArrayController.extend({

    // sortProperties:  ['title'],     //  Set sortProperties to 'title' by DEFAULT
                                       //  can set multiple properties to sort by multiple values (date or time)

    actions: {

        sortByTitle: function() {

            this.set('sortProperties', ['title']);       //  SET the sortProperties on an ARRAY CONTROLLER
                                                         //  Ember will sort the ARRAY by the properties you list
    }
}


});