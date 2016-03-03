/**
 * Created by Daniel on 12/2/2015.
 */

angular.module('todoListApp')
.directive('todos', function() {

        return {

            templateUrl: 'templates/todos.html',
            controller: 'mainCtrl'
        }

    });
