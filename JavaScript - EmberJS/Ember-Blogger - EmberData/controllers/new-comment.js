/**
 * Created by Daniel on 6/12/2015.
 */


Blogger.NewCommentController = Ember.Controller.extend({

    needs: ['post'],            //  associate comment with post we are looking at
                                //  access information from one controller to the other
                                //  list controllers you need access to

    actions: {
        save: function() {
            var comment = this.store.createRecord('comment', {
                text: this.get('text')
            });
            comment.save();

            var post = this.get('controllers.post.model');          //  controller association code
            post.get('comments').pushObject(comment);
            post.save();

            this.transitionToRoute('post', post.id);
        }
    }


});