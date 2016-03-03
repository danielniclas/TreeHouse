

//  Four main elements of Angular:
//  Directives --  Fundamental building block of Angular.  DEFINITIONS for the DECLARATIONS used in the Angular App
//  Factories --  Used to maintain one instance of something.  Used for maintaining state
//  Controllers -- Predominantly used just for DATA CONNECTIONS
//  Filters --  Temporary transformations of data as it travels between MODEL and VIEW


angular.module('AngularApp', [])               //  MAIN ANGULAR OBJECT



    .controller('CtrlOne', function ($scope, $http) {        //  Controller -  Property of Angular Module

        //  Data by AJAX:   Data to be available to element with this CONTROLLER
        $http.get('mook.json').success(function(puppies) {    // AJAX CALL:   "puppies" is the [ARRAY] from 'mook.json'



            // $SCOPE  --  Any property that you want to be able to use in the VIEW needs to be attached to this OBJECT
            //             serves as the connection between the [ model(our data)] and the [ views (what user sees) ]


            $scope.pups1 = puppies;   //  ARRAY is attached to the $SCOPE OBJECT - $SCOPE is like ALIAS

        });


            //  Data by direct addition:
            $scope.morePuppies = [
            {
                "name": "Sammy",
                "profession": "Super Jibber",
                "hometown": "New York, NY"
            },
            {
                "name": "Luxy",
                "profession": "Tripod",
                "hometown": "Detroit, MI"
            }
        ];

        //  Methods available in View with Buttons:
        $scope.add = function () {                      //  SCOPED ADD METHOD  --  change [ARRAY] an appear in VIEW
            $scope.pups1.push($scope.morePuppies.pop());       //  POP (remove) pup from [morePuppies] and PUSH (add) to [pups1]
        };

        $scope.remove = function (indexObject) {             //  SCOPED REMOVE METHOD
            $scope.morePuppies.push(indexObject);
            $scope.pups1 = _.without($scope.pups1, indexObject);    //  Underscore.JS code Here
        };

        //Assign (pass via instance) indexObject {OBJECT} to a $scoped PROPERTY called 'editingPerson':

        $scope.edit = function (indexObject) {         //  SCOPED EDIT METHOD
            $scope.editingPup = indexObject;
        };

    })




    .controller('CtrlTwo', function ($scope) {

        // OBJECT:  myData
        //  All the data objects that we want to access from the view need to be attached to the scope object

        $scope.myData = {
            name: "MooKORS!",
            email: "mook@bark.com",
            age: 10,
            active: false,
            role: "JIB"
        };
    })


    //  WYSIWYG:


    //   CALL method controller(), on the angular module object
    //   No AJAX here, just assign object to $scope

    .controller('CtrlWysiwyg', function ($scope) {

        $scope.user = {
            name: "Mook",
            bio: "<p>Mookers wants a bone and to go poop</p>"
        };
    })

        //CREATE a DIRECTIVE:    call the method directive(), on the angular module object (with the directive attribute)
        //                       Name of directive:  hallodirective
        //                       Pass in a function, which returns whatever the definition for the directive is
        //                       Returns whatever the definition for this directive is

        //                       require: ngModel
        //                       LINK FUNCTION: does most of the work
        //                       this link (function) receives the $scope OBJECT

        //                       $element OBJECT:   which is a j-Query wrapped version of our DOM element
        //                       $attrs OBJECT:  normalized version of all the attributes in our element
        //                       ngModelCtrl:   - PIPELINE for setting and reading the data value

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

                    //  READ ACCESS  --  from JSON/OBJECT to  VIEW INPUT:

                    // ng-model CALLs this function ANY TIME DATA CHANGES
                    ngModelCtrl.$render = function () {                 // to READ data, define (on the ngModelCtrl OBJECT) a function called $render
                        var contents = ngModelCtrl.$viewValue;          // ng-model stores the value in property viewValue
                        $element.hallo('setContents', contents);        //  PASS in the contents
                    };


                    //   WRITE ACCESS (SET VALUES)  -- Pipeline Back -- to change the bio property
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
        })

    //  WATCHER

    .controller('watcher', function ($scope, api) {

        //  DATA OBJECT:

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
                console.log("Pass entire message to the api.saveMessage() function");
            }
        });

    })


    .factory('api', function () {                       //  'api'  is the Object Name

        return {                                        //  return a Method:  api.saveMessage()
            saveMessage: function (message) {
                console.log('saving message: ', message);
                message.lastSaved = Date.now();
            }
        }
    })

//  SERVICES:  $http

    .controller('services', ['$scope', '$http', function ($scope , $http) {         //  ARRAY NOTATION -- minification safe mode

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


        //  PROMISE
        $http.get('people.json')             //  CALL returns a PROMISE: SUCCESS or ERROR RESPONSE
            .success(function(response) {    //  call .success() METHOD  on what is returned from $http.get
                $scope.people = response;          //  server returns JSON:  {OBJECT} or [ARRAY]

                //  $http service triggers angular's $digest cycle after response has been received
                //  any DATA CHANGES from the response will be reflected IMMEDIATELY
            })

            //  ERROR Handler:
            .error(function (err) {                // .error() METHOD  --  PROMISE
                alert(err);
            });



//  POST
//  Send data to the server:

        $scope.save = function (person) {               //  $scope.save METHOD  (like the edit METHOD above)
            $http.post('people.json', person)
                .success(function () {
                    alert('successfully saved');
                })

                .error(function (err) {
                    alert(err);
                });
        }

    }])

//  FACTORY  --  SERVICES:  Custom

//  Service $http -- abstract away complex operations to make our code easier and cleaner
//  SINGLETONS and MODELS -- OBJECTS that should only ever have one instance within our application (search parameters that persist through multiple views within app)

//  Controllers and Directives are largely STATELESS -- if the route changes to display a new page, or if the element a directive is within is removed and returned
//  any internal variables or data are reset

//  If you have data that needs to PERSIST across pages throughout the lifecycle of the app, a service or factory, is the best place to store it
//  FACTORY and SERVICE maintains STATE  (PERSISTS)

    .factory('DanielsFactory', function () {    //  INITIALIZATION() function  ((ONLY CALLED ONCE! - first time component requests factory))

        var factoryPups = [];       //  to store the list of pups we want to RETURN
        var otherFactoryPups = [
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

        //  EXPOSED METHODS:
        //  Like an INTERNAL API

        //  Factory must return something
        //  Return an OBJECT with METHODS -- Factory must return an object or a function (or it will error out)

        return {
            get: function () {                                  //  METHOD:  get
                return factoryPups;
            },
            getOther: function () {                             //  METHOD:  get
                return otherFactoryPups;
            },
            add: function () {                                  //  METHOD:  add
                factoryPups.push(otherFactoryPups.pop());
                            },
            remove:  function (index) {                           //  METHOD:  remove
                otherFactoryPups.push(index);
                //factoryPups = _.without(factoryPups, index );
                console.log("REMOVE()");
                factoryPups.splice(factoryPups.indexOf(index), 1)
            },
            save: function (index) {                              //  METHOD:  save -- shell method (does not do anything)
            }
        }
    })


    //  CONTROLLER TO USE THE ABOVE FACTORY:

    .controller('factoryController', function ($scope, DanielsFactory) {        //  instead of $http service require:  danielsFactory

        $scope.factoryPups = DanielsFactory.get();                              //  returns INTERNAL ARRAY from above  --  INVOKED on LOADING n
        $scope.otherFactoryPups = DanielsFactory.getOther();
        $scope.add = DanielsFactory.add;
        $scope.remove = DanielsFactory.remove;


        $scope.edit = function (index) {
            $scope.editingPerson = person
        };

        $scope.save = DanielsFactory.save;

    })



//  FACTORY  --  SERVICES:  Custom EXAMPLE 2 - External API


    .factory('poopFactory', function ($http) {    //  INITIALIZATION() function  ((ONLY CALLED ONCE! - first time component requests factory))

        var poops = [];                         //  to store the list of pups we want to RETURN
        var otherPoops = [
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

        //  EXPOSED METHODS:
        //  Like an INTERNAL API

        //  Factory must return something
        //  Return an OBJECT with METHODS -- Factory must return an object or a function (or it will error out)

        return {
            get: function () {                                  //  METHOD:  get
                if (poops.length == 0) {
                    $http.get('poops.json')
                        .success(function (response) {          //  SUCCESS HANDLER DIFFERENT - some unknown issue
                            for (var i= 0, ii = response.length; i < ii; i++) {
                                poops.push(response[i]);        //  push to add each item to the ARRAY
                            }
                        });
                    return poops;
                }
            },
            getOther: function () {                             //  METHOD:  get
                return otherPoops;
            },
            add: function () {                                  //  METHOD:  add
                poops.push(otherPoops.pop());
            },
            remove:  function (index) {                           //  METHOD:  remove
                otherPoops.push(index);
                //factoryPups = _.without(factoryPups, index );
                console.log("REMOVE()");
                poops.splice(poops.indexOf(index), 1)
            },
            save: function (index) {                              //  METHOD:  save -- shell method (does not do anything)

            $http.post('poops.json', poops)
                .success(function (){
                    alert('Saved');
                })
                .error(function (err){

                    alert(err);
                });
            }
        }
    })


    //  CONTROLLER TO USE THE ABOVE FACTORY:

    .controller('poopController', function ($scope, poopFactory) {        //  instead of $http service require:  danielsFactory

        $scope.poops = poopFactory.get();                              //  returns INTERNAL ARRAY from above  --  INVOKED on LOADING n
        $scope.otherPoops = poopFactory.getOther();
        $scope.add = poopFactory.add;
        $scope.remove = poopFactory.remove;


        $scope.edit = function (index) {
            $scope.editingPerson = person
        };

        $scope.save = poopFactory.save;

    })

//  DIRECTIVES:  Collections of Functionality
//  DIRECTIVES:  Represent the TRANSFORMING of otherwise static HTML elements into DYNAMIC and DATA DRIVEN components
//  2 Ingredients:  ATTRIBUTES used to DECLARE an HTML node  +  JS that implements that functionality


    .controller('directiveExample', function ($scope, People) {
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
                    $http.get('peopleId.json')
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

//  MOST COMMON use for a DIRECTIVE:  replacing a single node (contact card), with a fully baked set of HTML elements
//  that are all bound to the appropriate data objects
    //  Take [array] of [people] and display contact cards for each:

    .directive('contactCard', function () {         //  in JS everything is CamelCase:  contactCard  (contact-card in HTML)
        return {
            template: '<div class="contact-card">' +
            '<p class="name">Name:  {{contact.name}}</p>' +                         //  'person' is passed to 'contact'.  see scope property below
            '<p class="profession">Profession:  {{contact.profession}}</p>' +
            '</div>',

            restrict: 'A',    //  Specify how to insert dirctive into the DOM:  EACM:  Element, Attribute (MOST COMMON), Class, Comment
            replace: true,    //  TRUE:  Replace the ORIGINAL NODE (div), false to be inserted into the ORIGINAL NODE
            scope: {
                'contact': '=contactCard'          //   contact-card="person" (passing 'person' object   '=' means two way data binding for whatever property is passed through to that attribute
            },
            link: function ($scope, $element, $attrs) {

            }
        }
    })


    //  DatePicker

    .directive('picker', function () {

        return {
            link: function ($scope, $element, $attrs) {         //  $element - jQuery like wrapper around DOM element this directive is attached to

                $element.datepicker();          //  jQueryUI datepicker - initialized by calling datepicker on the element element object

              }
          }
    })

//  DatePicker + $attrs for customization

.directive('pickerdelux', function () {

    return {
        link: function ($scope, $element, $attrs) {         //  $element - jQuery like wrapper around DOM element this directive is attached to
                                                            //  $attrs - object that represents all the attributes specified on an element


            var isInitialized = false;
            $attrs.$observe('datepickerFormat', function (newValue){        //  $attrs.observe , like $scope.watch
                if (isInitialized) {
                    $element.datepicker('option', 'dateFormat', newValue);
                }else if (newValue) {
                    $element.datepicker({
                        dateFormat: newValue
                    });
                    isInitialized = true;
                }
            })
        }
    }
})

//  ng-model:   Two way data-binding  --  The NG-MODEL PIPELINE
//  To build customized inputs with ng-model, need to have a CONNECTION, or API, between our custom logic in our own directive
//  and the value or property that we are binding to:  NgModelController
//  Request access to our controllers within directives using the REQUIRE property
//  Any custom input we create will have a require: ngModel on its directive definition object

//  NgModelController gives us key METHODS and PROPERTIES:
//  METHODS:  $setViewValue  -- PASS along any data changes that come from our input.  Triggered as part of an event listener
//  METHODS:   $render  --  Data going in the other direction, data changing somewhere else
//  PROPERTY:  $parsers (make up majority of the ng-model pipeline) -- array of functions that translates the value that comes from the view (from #setViewValue) into the value we want to store in the Model
//  PROPERTY:  $formatters  (make up majority of the ng-model pipeline)  --  take Model value and transform it to what we display to end user


    .controller('pickergrandeCtrl', function ($scope) {
        $scope.course = {
            date: null
        };
    })
    .directive('pickergrande', function () {

        return {
            require: 'ngModel',     //  to start binding this to an actual data property, require: ngModel

            link: function ($scope, $element, $attrs, ngModelCtrl) {    //  Now can pass in ngModelCtrl

                console.log('ngModelCtrl: ', ngModelCtrl);

                var initializedDatepicker = false;
                $attrs.$observe('datepickerFormat', function (newValue) {
                    // If we've already initialized this, just update option
                    if (initializedDatepicker) {
                        $element.datepicker('option', 'dateFormat', newValue);
                        // $observe is still called immediately, even if there's no initial value
                        // so we check to confirm there's at least one format set
                    } else if (newValue) {
                        $element.datepicker({
                            dateFormat: newValue,
                            onSelect: function (date) {
                                $scope.$apply(function () {             //  process DIGEST CYCLE immediately  $scope.$apply
                                    ngModelCtrl.$setViewValue(date);
                                });
                            }
                        });
                        initializedDatepicker = true;
                    }
                });

                ngModelCtrl.$render = function () {
                    $element.datepicker('setDate', ngModelCtrl.$viewValue);
                }
            }
        }
    })


//  Back to Halo WYSIWYG:

.controller('Halo2', function ($scope, $http) {

    $scope.user = {
        name: "world",
        bio: ""
    };

    $http.get('markdown.md').success(function (bio) {
        $scope.user.bio = bio;
    });
})

    .directive('hallo', function () {
        return {
            require: 'ngModel',
            link: function ($scope, $element, $attrs, ngModelCtrl) {
                $element.hallo({
                    plugins: {
                        'halloformat': {},
                        'halloblock': {},
                        'hallojustify': {},
                        'hallolists': {},
                        'halloreundo': {}
                    }
                });


                //  TWO PIPELINE METHODS:  $render and $SetViewValue

                ngModelCtrl.$render = function () {
                    var contents = ngModelCtrl.$viewValue;
                    $element.hallo('setContents', contents);
                };

                //  Showdown is a popular JS markdown PARSER
                //  Add PARSERS and FORMATERS to our DIRECTIVE -- FORMATTER:  Conversion from MARKDOWN to HTML (Does not convert HTML to MARKDOWN)

                var converter = new Showdown.converter();
                var formatter = function (markdown) {
                    return converter.makeHtml(markdown);
                };

                ngModelCtrl.$formatters.push(formatter);            //  ADD formatter FUNCTION to ng-Model's ARRAY of $formatters


                //  PARSER:  toMarkdown LIBRARY:  HTML to MARKDOWN

                var parser = function (html) {
                    return toMarkdown(html);
                };

                ngModelCtrl.$parsers.push(parser);                  //  ADD parser FUNCTION to ng-Model's ARRAY of $parsers

                $element.on('hallomodified', function () {
                    var contents = $element.hallo('getContents');
                    ngModelCtrl.$setViewValue(contents);
                    $scope.$digest();
                });
            }
        }
    });