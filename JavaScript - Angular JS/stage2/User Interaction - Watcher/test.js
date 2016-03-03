/**
 * Created by Daniel on 2/25/2015.
 */



angular.module('myApp', [])
    .controller('myController', function ($scope, $http) {
        $scope.user = {name: 'Alex', id: 123};

        getUserData = function (id) {
            console.log('Getting user with ID: ' + id);
        };



        $scope.$watch('user.id', function (newValue, oldValue) {

            if (newValue) {
                getUserData($scope.user.id);
            }
        });



        // YOUR CODE HERE

    });