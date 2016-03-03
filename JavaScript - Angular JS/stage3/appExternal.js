angular.module('treehouseCourse', [])
  .controller('stageThreeCtrl', function ($scope, peopleFactory) {


    $scope.people = peopleFactory.get();

    $scope.newPerson = {};

    $scope.save = function (person) {
        peopleFactory.save(person);
    };

    $scope.add = function (newPerson) {
        peopleFactory.add(newPerson);
      $scope.newPerson = {};
    };

    $scope.remove = function (person) {
        peopleFactory.remove(person);
    }
  })




  .factory('peopleFactory', function ($http) {
    var people = [];

    return {
      get: function () {
        if (people.length == 0) {
          $http.get('people.json')
            .success(function (response) {
              for (var i = 0, ii = response.length; i < ii; i++) {
                people.push(response[i]);
              }
            })
            .error(function (err) {
              alert('ERROR: ' + err)
            });
        }
        return people;
      },

      add: function (person) {
        $http.post('people.json', person)
          .success(function () {
            people.push(person);
          })
          .error(function (err) {
            alert('add ERROR: ' + err)
          });
      },

      remove: function (person) {
        $http.delete('people.json', person)
          .success(function () {
            people.splice(people.indexOf(person), 1)
          })
          .error(function (err) {
            alert('remove ERROR: ' + err)
          });
      },

      save: function (person) {
        $http.post('people.json', person)
          .success(function () {
            alert('Person saved');
          })
          .error(function (err) {
            alert('save ERROR: ' + err)
          });

      }
    }
  });