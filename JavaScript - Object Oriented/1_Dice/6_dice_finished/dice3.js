/**
 * Created by Daniel on 6/30/2015.
 */




function Dice(sides) {          //  Constructor Function -- create OBJECT and inherit the 'sides' PROPERTY.  'this' is the yet to be created OBJECT
    this.sides = sides;
}


var roller =
    {
        roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }

};

Dice.prototype = roller;                //   ADD OBJECT containing METHOD to Dice --  roller inherits Dice OBJECT -- roller is CHILD OBJECT



var dice = new Dice(6);                 //  Instantiate dice OBJECT -- 6 sides
var dice10 = new Dice(10);              //  Instantiate dice OBJECT -- 10 sides

console.log("Comparison of two instantiated objects:  ", dice.roll === dice10.roll);
console.log("dice.roll: ", dice.roll);
console.log("dice10.roll: ", dice10.roll);