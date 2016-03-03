/**
 * Created by Daniel on 3/19/2015.
 */




angular.module('myApp', []).controller('namesCtrl', function($scope) {


    $scope.names = [

        {name: 'Koost',
        job: 'bones'},


        {name: 'Mook',
            job: 'jibbing'},


        {name: 'Barn',
            job: 'pooping'}

    ]
});