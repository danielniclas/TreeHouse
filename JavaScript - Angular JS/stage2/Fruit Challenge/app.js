/**
 * Created by Daniel on 3/17/2015.
 */


angular.module('myApp', [])
    .controller('myController', function ($scope, $http) {
        $scope.bowlOfFruit = [
            {name: 'Apple'},
            {name: 'Pear'},
            {name: 'Orange'}
        ];
    });
