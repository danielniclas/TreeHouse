/**
 * Created by Daniel on 1/23/2016.
 */


angular.module('myApp', [])


    .controller('myCtrl', function ($scope, Puppies) {

        $scope.puppies = Puppies.get();           //  Array of OBJECTS

        $scope.toys = {                      //  Single Object
            "Bone": 21.99,
            "Dragon": 8.99,
            "Frog": 1.50,
            "Snake": 2.00
        };

        $scope.view = function(pupName) {

            console.log("PupName: " + pupName);
        }



    })


    .factory('Puppies', function ($http) {
        var puppies = [];

        return {
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
                };
                return puppies;
            }

        }
    })

    //
    //.config(function($routeProvider){       //  Angular OBJECT  Injected Dynamically
    //
    //
    //    $routePovider
    //        .when('/',
    //        {
    //            controller: 'myCtrl',
    //            templateUrl: 'partials/View1.html'
    //        })
    //        .when('/view2',
    //        {
    //
    //            controller: 'myCtrl',
    //            templateUrl: 'partials/View2.html'
    //
    //        })
    //        .otherwise({ redirectTo: '/'});     // redirect to the ROOT  (View 1)
    //
    //})


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

    .directive('poopers', function () {
        return {
            template:
            "<tr>" +
            "<td> {{pup.id}}</td>" +
            "<td> {{pup.name}}</td>" +
            "<td> {{pup.profession}}</td>" +
            "<td> {{pup.hometown}}</td>" +
            "<td><span class='btn-sm btn-success'  ng-click='view(pup.name)'>{{pup.name}}</span>" +
            "</tr>",

            restrict: "A",      //  Restrict how directive is used:  ELEMENT  "E", ATTRIBUTE  "A"

            replace: true    //  TRUE:  Replace the DIV

            //scope: {
            //    'contact': '=contactCard'          //   contact-card="person" (passing 'person' object   '=' means two way data binding for whatever property is passed through to that attribute
            //}

        }
    });