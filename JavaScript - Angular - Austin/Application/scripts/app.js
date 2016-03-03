/**
 * Created by Daniel on 11/30/2015.
 */

angular.module("todoListApp", [])

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
            $scope.todos.push(todo);
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

        $scope.saveTodo = function(todo) {

            dataService.saveTodo(todo);
        };


    })


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

        this.saveTodo = function(todo) {

            console.log("The " + todo.name + " has been saved!");

        };

    })


    .controller('coolCtrl', function($scope){
        $scope.whoAmI = function() {
            console.log("This is the coolCtrl function!");
        };
        $scope.helloWorld = function() {

            console.log("helloWorld FUNCTION from INSIDE coolCtrl (Not the main controller)");
        }
    })

//  Due to Prototypical Inheritance:
//  The cool Controller inherits functions and values from the main Controller only when they don't already exist
//  within the cool Controller's $scope

//  Inheritance from the parent ONLY takes place if there's not a value or method of the same name on the child

//  Remember PROTOTYPICAL INHERITANCE flows only in one direction, from PARENT to CHILDREN

//  SIBLING CONTROLLERS will not have access to each other's scopes

    .controller('imASibling', function($scope){

            $scope.foobar = 12345
        });



