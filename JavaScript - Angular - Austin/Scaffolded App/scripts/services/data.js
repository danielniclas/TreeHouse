/**
 * Created by Daniel on 12/2/2015.
 */

//  SERVICES

'use strict';

angular.module('todoListApp')

//  Create a SERVICE:    (METHOD CHAINING)
//  METHOD:  .service( 1, 2 )
//  Parameters:
//  1.  Name of Service - In Camel Case
//  2.  Anonymous CallBack Function

.service('dataService', function($http) {         //  Need the http PROVIDER - for the getTodos METHOD
    //  Store SERVICES METHODS and VALUES (DATA) in HERE:
    this.helloConsole = function() {
        console.log("This is the hello console SERVICE");
    };

    //  CREATE SERVICE to simulate accessing a REST API  -- GET DATA METHOD
    this.getTodos = function (callback) {

        $http.get('mock/todos.json').then(callback);
    };

    //  $http.get(1)
    //  Parameters:
    //  1.  URL we are requesting  -- in this case the URL is a path on our service but can be anything

    //  $http.get(1).then(1)  --  then() METHOD:  Used to execute code after a response has been received from the server
    //  then(1)
    //  Parameters:
    //  1.  Callback --    callback function that is executed when a successful response is received

    //  SAVE and DELETE Data METHODS:
    this.deleteTodo = function(todo) {

        //  This is to simulate communication with the REST API which will tell database to delete data in the database
        console.log("The " + todo.name + " has been deleted!");

    };

    this.saveTodos = function(todos) {

        console.log("The " + todos.length + " todos has been saved!");

    };

});
