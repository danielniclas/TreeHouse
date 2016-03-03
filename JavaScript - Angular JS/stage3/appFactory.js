angular.module('treehouseCourse', [])


  .controller('stageThreeCtrl', function ($scope, humanFactory) {

    //  Instead of using $http.get  we use humanFactory  --  returns internal [ARRAY]  [people]
    $scope.people = humanFactory.get();       //  $scope.people = [people] returned from FACTORY  (humanFactory)

    $scope.newPerson = {};


        //  Functions:


    $scope.add = function (newPerson) {   //  $scope .add(newPerson)  which invokes humanFactory.add(newPerson)
        humanFactory.add(newPerson);
      $scope.newPerson = {};              //  newPerson is an {OBJECT} with properties:  name, profession, hometown
    };

    $scope.remove = function (person) {
        humanFactory.remove(person);
    };

    $scope.save = function (person) {
        humanFactory.save(person);
     }

  })


    //  FACTORY (SERVICE):  For data that needs to PERSIST across pages or throughout the life of the app
    //  (MAINTAINING STATE)  --  {OBJECT} which only ever have one instance in our application
    //  ((CALLED ONCE at Start))


    //  PARAMETER 1:  FACTORY NAME:  'People'  Angular looks this up as part of dependency injection
    //  PARAMETER 2:  INITIALIZATION FUNCTION -- ONLY CALLED ONCE when factory requested and store whatever is returned

  .factory('humanFactory', function () {    //  INITIALIZATION() function  ((ONLY CALLED ONCE! - first time component requests factory))

    var people = [];

    var otherpeople = [
        {
            "name" : "MOOK",
            "profession" : "Bark",
            "hometown" : "SJ"
        },
        {
            "name" : "Koost",
            "profession" : "Bones",
            "hometown" : "SJ"
        }
    ];

    return {                //  Return and {OBJECT} with a couple Methods()  --  FACTORY must return something:  [OBJECT} or FUNCTION()
                            //  work on [people] directly instead of $scope.people
      get: function () {
        return people;     //  return [people] array
      },

      add: function (person) {
        people.push(person);                //  Push {newPerson} {OBJECT} into [people] [ARRAY]
      },

      remove: function (person) {
        people.splice(people.indexOf(person), 1)
      },

      save: function (person) {             //  Does not do anything
      }

    }



  });