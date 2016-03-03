/**
 * Created by Daniel on 6/11/2015.
 */


Blogger.PostController = Ember.ObjectController.extend({

    isEditing:  false,
    actions:  {
        edit: function(){

            this.set('isEditing', true);

        },
        save: function() {

            this.set('isEditing', false);

        }
    }

});