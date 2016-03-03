angular.module('treehouseCourse', [])


    //  DEPENDENCY INJECTION


//  ARRAY NOTATION - (better way to include dependencies):
//  .controller('stageThreeCtrl', function ($scope, $http) {

  .controller('stageThreeCtrl', ['$scope', '$http', function ($scope , $http) {         //  ARRAY NOTATION -- minification safe mode

        //  Build Processes -- take care of issues like minification -- automation
        //  ngmin
        //  yoeman.io

    $scope.people = [];   //  Create an empty [ARRAY]

        //  controller access the $scope object -- $scope is a parameter in the function
        //  IMPORTANT:
        //  When Angular initializes this controller it will inspect the parameters of the function
        // and for each parameter it will look in its LIST OF SERVICES that MATCHES that name
        //  in this case:  $scope
        //  SERVICES:  helper libraries - for providing additional functionality -- making AJAX calls,
        //  connecting your code to the VIEW  -- $scope -- VIEW will be parsed against it
        //  manipulating properties on a Window object


        //  $http SERVICE -- for making AJAX calls and handling their responses
        //  http methods:  GET    POST    PUT    DELETE


        //  Object.Property = Value
        //  Object = {Property: Value}

        //  Object.Property = [ARRAY]
        //  $scope.people = [ARRAY]


                                         //  PROMISE
    $http.get('people.json')             //  CALL returns a PROMISE: SUCCESS or ERROR RESPONSE
        .success(function(response) {    //  call .success() METHOD  on what is returned from $http.get
      $scope.people = response;          //  server returns JSON:  {OBJECT} or [ARRAY]
        //  Object.Property = [ARRAY]
        //  $scope.people = [ARRAY]
        //  http service triggers angular's $digest cycle after response has been received
        //  any data changes from the response will be reflected immediately
    })

  //  ERROR Handler:
        .error(function (err) {                // .error() METHOD  --  PROMISE
            alert(err);
    });



//  POST Service
//  Send data to the server:

    $scope.save = function (person) {
        $http.post('people.json', person)
            .success(function () {
                alert('successfully saved');
            })

            .error(function (err) {
            alert(err);
        });
    }

  }]);



