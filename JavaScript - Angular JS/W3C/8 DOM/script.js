/**
 * Created by Daniel on 3/19/2015.
 */



(function(angular) {
    'use strict';
    angular.module('switchExample', ['ngAnimate'])
        .controller('ExampleController', ['$scope', function($scope) {
            $scope.items = ['settings', 'home', 'other'];
            $scope.selection = $scope.items[0];
        }]);
})(window.angular);