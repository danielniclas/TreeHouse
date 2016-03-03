/**
 * Created by Daniel on 2/25/2015.
 */


    //  Object.Property = Value
    //  Object.Property = {OBJECT}
    //  Object.Property = [ARRAY]


angular.module('treehouseCourse', [])


    .controller('stageCtrl', function ($scope, api) {

        $scope.message = {
            text: "",
            lastSaved: null
        };

        //  BIND to PROPERTY you want to MONITOR:  $watch
        //  *** Set up WATCHER on 'message.text' PROPERTY  ***
        //  Function that runs every time the 'message.text' PROPERTY is changed  --  $watch BOUND to 'message.text'

        //  (newValue) - whatever data property currently is
        //  (oldValue) - whatever data property last value

        $scope.$watch('message.text', function (newValue, oldValue) {   //  built in Method:  $watch

            if (newValue) {
                api.saveMessage($scope.message);    // PASS entire message - ($scope.message) to api.saveMessage() FUNCTION
            }
        });

    })


    .factory('api', function () {
        return {                                        //  return a Method:  api.saveMessage()
            saveMessage: function (message) {
                console.log('saving', message);
                message.lastSaved = Date.now();
            }
        }
    });

