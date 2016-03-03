/**
 * Created by Daniel on 2/21/2015.
 */




(function() {    //  wrapping JS in a CLOSURE  (good habit)


    var gems = [
        {
            name: 'Dodecahedron',
            price: 2,
            description: 'woof woof woof woof woof woof',
            images: [
                   'img/1.png',
                   'img/2.png'
                    ],

            canPurchase:  true,
            soldOut: false,
            reviews: [
                {
                    stars: 5,
                    body:  "Love this product",
                    author: "Joe Bob"
                },
                {
                    stars: 4,
                    body:  "Hate it",
                    author: "Boner J"
                },
                {
                    stars: 3,
                    body:  "Ok",
                    author: "Sloppy Steve"
                }
            ]
        },

        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: 'poop poop poop poop poop poop',
            canPurchase:  true,
            soldOut: false,
            images:  [
                'img/3.png',
                'img/4.png'
                ],
            reviews: [
                {
                    stars: 1,
                    body:  "bleh",
                    author: "Joe Bob"
                },
                {
                    stars: 2,
                    body:  "barf",
                    author: "Boner J"
                },
                {
                    stars: 2,
                    body:  "weak",
                    author: "Sloppy Steve"
                }
            ]
        },

        {
            name: 'Barn Gem',
            price: 500,
            description: 'bowroo  bowroo  bowroo  bowroo  bowroo',
            canPurchase:  true,
            soldOut: false,
            images:  [
                'img/3.png',
                'img/4.png'
            ]
        }
    ];

    // MODULE:
    //  ng-app DIRECTIVE  runs this MODULE when the HTML document loads

    //  angular. = AngularJS library
    //  'appName-store'  application name
    // []  where the dependencies go  - none in there

    var app = angular.module('appName-store', []);



    //  **************************************************
    //   CONTROLLERS create OBJECTS.PARAMETER pairs (like a CONSTRUCTOR function) --  OBJECT name is ALIAS
    //   OBJECTS are available to HTML page

    //  CONTROLLER 1:     ALIAS:  StoreCtrlAlias     ( ng-controller="StoreController as StoreCtrlAlias" )
    app.controller('StoreController', function() {


    //  'this' -- 'this' is an OBJECT of the function 'StoreController'
    //  FUNCTIONS -- carry UNBORN OBJECT ('this') inside
    //  ALIAS is the spawned new OBJECT  with the PROPERTY initialized below

    this.RocksIndex = {};     //  INITIALIZE 'gem' as OBJECT
    this.Rocks = gems;        //  INITIALIZE 'gems'   gems is an [ARRAY] of {OBJECTS}

        //  calling this function with the ng-controller directive spawns the OBJECT:  StoreCtrlAlias.Gems
        //  calling this function with the ng-controller directive spawns the OBJECT:  StoreCtrlAlias.GemIndex
    });


    //  **************************************************

    //  CONTROLLER 2:    ALIAS:  PanelCtrlAlias   (  ng-controller="PanelController as PanelCtrlAlias" )
    app.controller('PanelController', function(){

    this.tab = 1;

    this.selectTab = function(setTab) {    //  when you click on a tab (ng-click) setting this.tab to (1, 2, or 3)
        this.tab = setTab;
         };

    this.isSelected = function(checkTab){
        return (this.tab === checkTab);    // if (this.tab === 1) TRUE  then ng-show
        };
    });

    //  **************************************************


    //  CONTROLLER 3:    ALIAS:  'ReviewCtrlAlias'   ( ng-controller="ReviewController as ReviewCtrlAlias" )
    app.controller('ReviewController', function(){


        this.ReviewIndex = {};



        this.addReview = function(x) {
            x.reviews.push(this.ReviewIndex);        //  'index.reviews' is the 'reviews' [ARRAY]
                                                     //  'reviewindex' is the new [ARRAY} item -- new review
            this.ReviewIndex = {};                   //  this resets the 'reviewindex' to a new and empty object
                                                     //  clear out the form and hide the live preview

        };

    });


}) ();  //  END CLOSURE





