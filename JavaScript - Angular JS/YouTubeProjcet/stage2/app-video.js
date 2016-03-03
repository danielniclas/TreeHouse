/**
 * Created by Daniel on 1/23/2016.
 */


var app = angular.module('myApp', ['ngRoute']);


    app.controller('myCtrl', function ($scope, puppiesService) {

        $scope.puppies = puppiesService.get();    //  Puppies is a Service -- puppiesService EXPOSES the get() METHOD in the Service OBJECT it returns

        $scope.toys = {                      //  Single Object
            "Bone": 2.99,
            "Dragon": 4.99,
            "Frog": 5.50,
            "Snake": 2.00
        };

        $scope.truthy = false;

        $scope.view = function(pupName) {
            console.log("PupName: " + pupName);
            $scope.imageName = pupName;
            $scope.truthy = true;
        }
    });


    app.controller('myCtrl2', function ($scope){

        $scope.property = "$scope.property:  This property is encapsulated in the myCtrl2 $scope OBJECT";
        $scope.property2 = "$scope.property2:  This property is ONLY available to HTML ELEMENTS linked to myCtrl2"

    });


    app.factory('puppiesService', function ($http) {
        var puppies = [];

        return {                            //  Service RETURNS an OBJECT called puppiesService and exposes a get() METHOD
            get: function () {
                if (puppies.length == 0) {
                    $http.get('puppies.json')
                        .success(function (response) {
                            for (var i = 0, ii = response.length; i < ii; i++) {      //  ii is the length of the ARRAY, i is each item in the array
                                puppies.push(response[i]);   //  push item into array
                            }
                        })
                        .error(function (err) {
                            alert('ERROR: ' + err)
                        });
                }
                return puppies;          //  RETURN the puppies ARRAY  and assign to $scope.puppies ABOVE
                                         //  This SERVICE METHOD returns an ARRAY created from contents of the JSON
            }

        }
    });


    app.config(function($routeProvider){       //  Angular OBJECT  Injected Dynamically

            $routeProvider.when('/', {
                templateUrl: 'partials/View1.html',
                controller: 'myCtrl'
            });

            $routeProvider.when('/View2', {
                templateUrl: 'partials/View2.html',
                controller: 'myCtrl'
            });

            $routeProvider.when('/View3', {
                templateUrl: 'partials/View3.html',
                controller: 'myCtrl2'
            });

            $routeProvider.otherwise({
                redirectTo: '/'                 // redirect to the ROOT  (View 1)
            });
    });


    //  $rootScope - Top level data object that will manage the lifecycle of our web app
    //  responsible for firing off digest cycles any time a data property changes
    //  which is how our changes to one property propagate throughout all the views as wll as any other services or directives that depend on it
    //  $rootScope is just another service like HTTP, so it can be injected anywhere -- rare to require it directly
    //  More commonly you request a child instance of it:  $scope
    //  New child scope prototypically inherits from its parent scope.

    //  Child scope has read access to the parent scope, but not write access
    //  JS first checks for properties in child scope and if can't find checks the parent scope

    //  Rule:  Embed all properties in a wrapping object

    //  Directives can receive the scope one of three ways:
    //  1.  Default:  No new scope is created for that directive - receives the exact same scope instance as its parent HTML code
    //  2.  scope:  true  -- standard child scope -- exactly the same as controllers receive
    //  3.  isolate scope -- Nothing is inherited from the parent scope.
    //  Example:  whatever gets passed into the contactCard attribute, should be set to the contact property on our scope inside the contactCard directive

    app.directive('poopersDirective', function () {
        return {
            template:
            "<tr>" +
            "<td> {{pup.id}}</td>" +
            "<td> {{pup.name}}</td>" +
            "<td> {{pup.profession}}</td>" +
            "<td><button type='button' class='btn btn-primary btn-xs'  ng-click='view(pup.name)'>{{pup.name}}</button>" +
            "</tr>",

            restrict: "A",      //  Restrict how directive is used:  ELEMENT  "E", ATTRIBUTE  "A"
            replace: true    //  TRUE:  Replace the DIV

        }
    });