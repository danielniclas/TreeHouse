

angular.module('treehouseCourse', [])


    //CALL method controller(), on the angular module object
    // No AJAX here, just assign object to $scope

  .controller('elementController', function ($scope) {

    $scope.user = {
      name: "Mook",
      bio: "<p>Mookers wants a bone and to go poop</p>"
    };
  })


    //  $scope is an {OBJECT}
    //  'user' is an {OBJECT}
    //  'user' is also a PROPERTY of $scope

    //  Object.Property = Value
    //  Object = {Property: Value}

    //  Object.Property = {OBJECT}
    //  $scope.user = {OBJECT}


    //CREATE a DIRECTIVE:    call the method directive(), on the angular module object (with the directive attribute)
    //                       Name of directive:  hallodirective
    //                       Pass in a function, which returns whatever the definition for the directive is
    //                       Returns whatever the definition for this directive is

    //                       require: ngModel
    //                       LINK FUNCTION: does most of the work
    //                       this link (function) receives the $scope OBJECT
    //                       $element OBJECT which is a j-Query wrapped version of our DOM element
    //                       $attrs OBJECT - normalized version of all the attributes in our element
    //                       ngModelCtrl - PIPELINE for setting and reading the data value




  .directive('hallodirective', function () {

    return {                                        //  function returns all this:

        require: 'ngModel',

        link: function ($scope, $element, $attrs, ngModelCtrl) {        //  'Link'  function

            $element.hallo({        //  initialized hallo editor with PLUGINS
              plugins: {
                'halloformat': {},
                'halloblock': {},
                'hallojustify': {},
                'hallolists': {},
                'halloreundo': {}
          }
        });

          //  $scope:  binding Object
          //  $element:  jQuery wrapped version of our DOM ELEMENT
          //  ngModelCtrl:  Pipeline for setting and reading the data value we work with

          //  READ and RENDER
          //  to READ data :  define a function called:   $render
          //  this gets defined on the ngModel controller (ngModelCtrl:  pipeline used to communicate)
          //  ngModel will call this function any time the data changes somewhere else
          //  use this to update our plugin with whatever the current value is
          //   ngModel stores that value in a property called viewValue

          //  According to halo to update it.  Call halo with 'setContents' and pass the contents




            //  CUSTOM READ ACCESS  --  from JSON/OBJECT to  VIEW INPUT:

            // ng-model CALLs this function ANY TIME DATA CHANGES
            ngModelCtrl.$render = function () {    // to READ data, define (on the ngModelCtrl OBJECT) a function called $render
            var contents = ngModelCtrl.$viewValue; // ng-model stores the value in property viewValue
            $element.hallo('setContents', contents);  //  PASS in the contents
            };


            //      QUIZ answer:

            //      ngModelCtrl.$render = function () {
            //      var contents = ngModelCtrl.$viewValue;
            //      console.log('setContents', contents);
            //      console.log('XXX', contents);
            //      };



         // WRITE ACCESS (SET VALUES)  -- Pipeline Back -- to change the bio property
         //   $setViewValue() method.  Method ngModel provides to send data back in to original property
         //  halo event:  'hallomodified'  :  event that user has made update to text
         //  retrieve content from the editor:  hallo method:  'getContents'
         //  Pass that along to controller:    ngModelCtrl.$setViewValue(contents);
         //  digest loop is how angular knows that a property is changed, and that it should update any other views
         // or methods to depend on that property

        //  CUSTOM WRITE INTERFACE  --  from VIEW to OBJECT/JSON:   Data back into ORIGINAL PROPERTY

          $element.on('hallomodified', function () {     //  HALLO provided EVENT called "hallomodified"  with .on() event handler
                                                         //  USER makes update to text
          var contents = $element.hallo('getContents');  //  RETRIEVE content with HALLO provided 'getContents'
          ngModelCtrl.$setViewValue(contents);  //  $setViewValue sends data back to original property

          $scope.$digest();        //  Digest Loop - how Angular knows that a PROPERTY is changed
                                   // and should update any other views or methods that depend on that PROPERTY

        });
      }
    }
  });