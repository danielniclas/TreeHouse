angular.module('treehouseCourse', [])


  .controller('stageFourCtrl', function ($scope, People) {

    $scope.people = People.get();

    $scope.receipt = {
      "Steak": 21.99,
      "Salad": 8.99,
      "Chips": 1.50,
      "Drink": 2.00
    }
  })


  .factory('People', function ($http) {
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
        };
        return people;
      },




      add: function (person) {
        $http.post('people.json', person)
          .success(function () {
            people.push(person);
          })
          .error(function (err) {
            alert('ERROR: ' + err)
          });
      },
      remove: function (person) {
        $http.delete('people.json', person)
          .success(function () {
            people.splice(people.indexOf(person), 1)
          })
          .error(function (err) {
            alert('ERROR: ' + err)
          });
      },
      save: function (person) {
        $http.post('people.json', person)
          .success(function () {
            alert('Person saved');
          })
          .error(function (err) {
            alert('ERROR: ' + err)
          });
      }
    }
  })


    //  $rootScope - Top level data object that will manage the lifecycle of our web app
    //  responsible for firing off digest cycles any time a data property changes
    //  which is how our changes to one property propagate throughout all the views as wll as any other services or directives that depend on it
    //  $rootScope is just another service like HTTP, so it can be injected anywhere -- rare to require it directly
    //  More commonly you request a child instance of it:  $scope
    //  New child scope prototypically inherits from its parent scope.

    //  Child scope has read access to the parent scope, but not write access
    //  JS first checks for properties in child scope and if can't find checks the parent scope

    //  Rule:  Embed all properties in a wrapping object

    //  Directives can receive the scope one of three ways:
    //  1.  Default:  No new scope is created for that directive - receives the exact same scope instance as its parent HTML code
    //  2.  scope:  true  -- standard child scope -- exactly the same as controllers receive
    //  3.  isolate scope -- Nothing is inherited from the parent scope.
    //  Example:  whatever gets passed into the contactCard attribute, should be set to the contact property on our scope inside the contactCard directive

  .directive('contactCard', function () {
    return {
      template: '<div class="contact-card">' + 
        '<p class="name">NameXX:  {{contact.name}}</p>' +
        '<p class="profession">Profession:  {{contact.profession}}</p>' +
      '</div>',
      replace: true,    //  TRUE:  Replace the DIV
      scope: {
        'contact': '=contactCard'          //   contact-card="person" (passing 'person' object   '=' means two way data binding for whatever property is passed through to that attribute
      },
      link: function ($scope, $element, $attrs) {

      }
    }
  });