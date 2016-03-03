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

    //  CONTROLLER:     ALIAS:  alias     ( ng-controller="StoreController as alias" )  OBJECT OBJECT
    app.controller('StoreController', function() {

    //  'this' -- 'this' is an OBJECT of the function 'StoreController'
    //  'this.rock' is an array with three OBJECTS [Object, Object , Object]  length:  3  and a __proto__ object
    //  FUNCTIONS -- carry UNBORN OBJECT ('this') inside


    this.indexx = {};  //  Best to do INITIALIZATION inside of a controller
    this.rock = gems;  //  INITIALIZE 'rock'   gems is an [ARRAY] of {OBJECTS}
                       // ( ng-repeat="indexx in alias.rock" - 'indexx' holds each {OBJECT} in gems [ARRAY] ):
                       //  indexx.reviews, indexx.name, indexx.price, indexx.images    {{indexx.name}}

                       //  alias.rock = gems [array]
                       // ( ng-repeat="indexx in alias.rock" - each OBJECT in gems [ARRAY of OBJECTS] )

    console.log('this: ', this);
    console.log('this.rock:', this.rock )

    });

    //  **************************************************

    //  CONTROLLER:
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


    //  CONTROLLER:    alias:  'reviewCtrlalias'   ( ng-controller="ReviewController as reviewCtrlalias" )
    app.controller('ReviewController', function(){

        this.reviewCtrlalias = {};
        this.reviewindex = {};          //  INITIALIZE 'reviewindex'  OBJECT --  ( to hold all review OBJECTS in the 'index.review' [ARRAY] )
                                        //  NESTED: (ng-repeat="reviewindex {OBJECTS} in indexx.reviews [ARRAY]"):
                                        //  'indexx.reviews' is an [ARRAY] of objects  {stars, body, author} ('reviewindex')
                                        //  reviewindex.stars,  reviewindex.body, reviewindex.author

                                        //  {{reviewCtrlalias.reviewindex.stars}}, reviewCtrlalias.reviewindex.body, reviewCtrlalias.reviewindex.author
                                        //  {{OBJECT.OBJECT.property}}

                                        // ('reviewindex') = 'review' in the video
                                        //  'indexx.reviews' is [ARRAY] like 'alias.rock' [ARRAY] above
                                        //  'indexx.reviews' is an [ARRAY] of objects  {stars, body, author}

                                        //  Conclusion:  PUT CONTROLLER ALIAS {OBJECT} in front of list
                                        //  {{reviewCtrlalias.reviewindex.stars}}, reviewCtrlalias.reviewindex.body, reviewCtrlalias.reviewindex.author
                                        //  {{OBJECT.OBJECT.property}}


        this.addReview = function(indexx) {
            indexx.reviews.push(this.reviewindex);   //  'index.reviews' is the 'reviews' [ARRAY]
                                                     //  'reviewindex' is the new [ARRAY} item -- new review
            this.reviewindex = {};                   //  this resets the 'reviewindex' to a new and empty object
                                                     //  clear out the form and hide the live preview

        };

    });


}) ();  //  END CLOSURE





