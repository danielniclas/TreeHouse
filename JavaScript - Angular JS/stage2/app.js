


angular.module('treehouseCourse', [])


  .controller('stageTwoCtrl', function ($scope) {

        // OBJECT:  myData
        //  All the data objects that we want to access from the view need to be attached to the scope object

    $scope.myData = {
      name: "MooKORS!",
      email: "mook@bark.com",
      age: 25,
      active: false,
      role: "JIB"
    };
  });

        //  $scope is an {OBJECT}
        //  myData is an {OBJECT}
        //  myData is also a PROPERTY of $scope

        //  Object.Property = Value
        //  Object = {Property: Value}

        //  Object.Property = {OBJECT}
        //  $scope.myData = {OBJECT}


