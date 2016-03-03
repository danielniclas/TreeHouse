/**
 * Created by Daniel on 3/17/2015.
 */


angular.module('myApp', [])

    .controller('myController', function($scope) {
        $scope.user = {
            name: 'MOOKORS'
        };
    })


    .directive('myDirective', function () {
        return {
            require: 'ngModel',
            priority: 1,
            link: function ($scope, $element, $attrs, ngModelCtrl) {



                // YOUR CODE HERE
                //  Anything new entered into INPUT is detected in the MASTER of RECORD and logged to console

                      ngModelCtrl.$render = function () {
                      var contents = ngModelCtrl.$viewValue;
                      console.log("Contents from TEXT field: ", contents);

                      };



            }
        }
    });