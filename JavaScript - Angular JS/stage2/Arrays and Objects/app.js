

angular.module('treehouseCourse', [])


    .controller('stageCtrl', function ($scope, $http) {


        var otherPeople = [
            {
                "name": "Jane",
                "profession": "Designer",
                "hometown": "New York, NY"
            },
            {
                "name": "Jerry",
                "profession": "Salesman",
                "hometown": "Detroit, MI"
            }
        ];


        //  Object.Property = Value
        //  Object = {Property: Value}

        //  Object.Property = [ARRAY]
        //  $scope.people = [ARRAY]

        //this.object = {};

        //  get()  people.json [ARRAY]:
        $http.get('people.json').success(function(passFromGet) {
            $scope.pupArray = passFromGet;
        });


        //  Object.Property = [ARRAY]
        //  $scope.people = [ARRAY]


        $scope.add = function () {                      //  SCOPED ADD METHOD  --  change [ARRAY] an appear in VIEW
            $scope.pupArray.push(otherPeople.pop());
        };

        $scope.remove = function (personObject) {       //  SCOPED REMOVE METHOD
            otherPeople.push(personObject);
            $scope.pupArray = _.without($scope.pupArray, personObject);    //  Underscore.JS code Here
        };


        //Assign (pass via instance) indexObject {OBJECT} to a $scoped PROPERTY called 'editingPerson':

        $scope.edit = function (personObject) {         //  SCOPED EDIT METHOD
            $scope.editingPerson = personObject;
        };

        //  Object.Property = Value
        //  Object.Property = {OBJECT}
        //  $scope.editingPerson = {indexPerson}    {indexPerson} is passed into the function


        $scope.save = function (personObject) {         //  SCOPED SAVE METHOD
            $http.post('people.json', personObject)
                .success(function (personObject) {
                    alert('Saved!');
                })
                .error(function (err) {
                    alert('Error: '+err);
                });
        }
    });



