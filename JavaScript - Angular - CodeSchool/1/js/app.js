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
            soldOut: false
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

    //  CONTROLLERS -- help us get data onto a page
    //  CONTROLLERS are where we define our applications behavior by defining functions and values
    //  Name of Controller:  StoreController  (1st parameter passed in)
    //  Anonymous Function  (2nd parameter passed in)  --  the code in this function will be executed when StoreController is called

    app.controller('StoreController', function() {


    // This is the data structure for the   <div ng-controller="StoreController as alias">:
    // 'rock' property added to 'this' OBJECT and gems[] assigned to the 'rock' property
    this.rock = gems;   // rock (picked name) is NOW a PROPERTY of controller
                        // formation of OBJECT:  this.rock
                        //  New Object.property is: StoreController.rock
                        //  'this' is an UNBORN OBJECT


    console.log('this: ', this);
    console.log('this.rock:', this.rock )

    });



    //  CONTROLLER:  PanelController
    app.controller('PanelController', function(){

    this.tab = 1;

    this.selectTab = function(setTab) {    //  when you click on a tab (ng-click) setting this.tab to (1, 2, or 3)
        this.tab = setTab;
         };

    this.isSelected = function(checkTab){
        return (this.tab === checkTab);    // if (this.tab === 1) TRUE  then ng-show
        };

    });




}) ();  //  END CLOSURE





