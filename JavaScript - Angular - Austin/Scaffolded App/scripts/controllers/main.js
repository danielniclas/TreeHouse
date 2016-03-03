/**
 * Created by Daniel on 12/2/2015.
 */

//  MAIN CONTROLLER FILE

'use strict';


angular.module('todoListApp')       //  GET the MODULE and attach the CONTROLLER

.controller('mainCtrl', function($scope, dataService){

//  CONTROLLER:   and their $scope
//  Controllers provide a set of application logic that is typically confined to one piece of teh application's
//  user interface -- MEANING:  To an HTML ELEMENT and those that are children of that ELEMENT
//  All of the CONTROLLERS FUNCTIONS and VALUES are literally scoped to a limited piece of the application

//  SERVICES:  To pass DATA or METHODS to different parts of the application
//  SERVICES can be used across your application through DEPENDENCY INJECTION

//  DEPENDENCY INJECTION is how Angular makes code available to multiple parts of the application
//  Multiple CONTROLLERS can use the same SERVICE as long as the SERVICE is defined as a DEPENDENCY

//  Create a CONTROLLER:
//  METHOD:  .controller( 1, 2 )
//  Parameters:
//  1.  Name of Controller - In Camel Case
//  2.  Anonymous CallBack Function   --  takes parameters (services like $scope)


    $scope.helloWorld = function() {
        console.log("Hello MoOkOrs! This is the hellWorld controller function in the mainCtrl");
    };

    //$scope.todos = [
    //
    //    {"name" : "clean the house"},
    //    {"name" : "feed dog"},
    //    {"name" : "water lawn"},
    //    {"name" : "pay bills"},
    //    {"name" : "run"},
    //    {"name" : "swim"}
    //
    //    ];

    $scope.addTodo = function() {

        var todo = {name: "This is a new todo."};
        $scope.todos.unshift(todo);     //  unshift()  ARRAY METHOD to add to top of list.  push()  add to bottom of ARRAY
    };

    $scope.helloConsole = dataService.helloConsole;

    dataService.getTodos(function (response) {

        console.log("response.data: ", response.data);
        $scope.todos = response.data

    });

    $scope.deleteTodo = function(todo, $index) {
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
    };

    $scope.saveTodos = function() {

        var filteredTodos = $scope.todos.filter(function(todo) {      //  todos is an ARRAY of OBJECTS.  Use ARRAY filter() METHOD
            //  filter ARRAY into new ARRAY
            if(todo.edited) {

                return todo;
            }
        });
        dataService.saveTodos(filteredTodos);
    };


});