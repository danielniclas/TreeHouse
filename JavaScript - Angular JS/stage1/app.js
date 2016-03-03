


//angular.module('treehouseCourse', [])
//  .controller('stageOneCtrl', function ($scope, $http) {
//    $http.get('people.json').success(function(people) {
//      $scope.people = people;
//    });
//  });



angular.module('treehouseCourse', [])


    .controller('stageOneCtrl', function ($scope, $http) {


        $http.get('mook.json').success(function(puppies) {   // AJAX CALL:   "puppies" is the [ARRAY] from 'mook.json'

            $scope.pups = puppies;   //  ARRAY is attached to the $SCOPE OBJECT - $SCOPE is like ALIAS

            //  Object.Property = Value
            //  Object = {Property: Value}
            //  pups = [puppies]
            //  'pups' property holds the [ARRAY] of 'puppies' (from JSON file)

            // $SCOPE  --  Any property that you want to be able to use in the view needs to be attached
            //             to this OBJECT
            //             serves as the connection between the [ model(our data)] and the [ views (what user sees) ]

        });



    });



//$scope - serves as the connection between the [ model(our data)] and the [ views (what user sees) ]
//$scope - any property that you want to use in the view MUST be attached to $scope