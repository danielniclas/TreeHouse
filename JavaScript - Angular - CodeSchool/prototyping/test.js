/**
 * Created by Daniel on 2/23/2015.
 */


var dog = {

    name:  'barn',
    age: 10,
    job: 'bark'
};

//var NewPup = function (name, food) {
//
//    this.name = name;
//    this.food = food;
//};

//  1.  CONSTRUCTOR FUNCTION for NEW OBJECT:
function NewPup (name, food) {
    this.name = name;
    this.food = food;
}



console.log("XXX  NewPup:", NewPup);
console.log("XXX  NewPup.prototype:", NewPup.prototype);

//  2.  CONNECTION WITH OBJECT --  prototype is a property that holds the OBJECT:
NewPup.prototype = dog;




console.log("XXX  NewPup.prototype = dog -- NewPup.prototype:", NewPup.prototype);
console.log("  ");

//  3.  CREATE the NEW OBJECT and pass in the new values
var mook = new NewPup('Mook' , 'bones');



console.log ( 'mook: ', mook);
console.log ( 'mook.name: ', mook.name);
console.log ( 'mook.age: ', mook.age);
console.log ( 'mook.job: ', mook.job);
console.log ( 'mook.food: ', mook.food);


console.log ( 'NewPup.name: ', NewPup.name);








var PUP = {                // To be used as the PROTOTYPE OBJECT

    name:  'Anonymous',
    species:  'Pupersons',
    color:  "RED",
    greet:  function (name, mood) {
        console.log("ZZZ: personObject -- Hello, " + name + " I am " + this.name +
        " and I am in a " + mood + " mood!");
    }
};

//  ******  PROTOTYPAL INHERITANCE  -  INHERIT and OVERRIDE Keys/Properties from another OBJECT  *******
//  ******  SPAWN an OBJECT from a PROTOTYPE
//  ******  PROTOTYPE is REFERENCE POINTS for OTHER OBJECTS

//  CONSTRUCTOR FUNCTION:  Capital N -- clarifies as a CONSTRUCTOR -- TO CREATE A NEW OBJECT
//  Every FUNCTION has a PROTOTYPE PROPERTY which contains an OBJECT

function NewPUP (name, age) {
    //  CONSTRUCTOR FUNCTION -- carries UNBORN OBJECT ('this') inside
    //  OBJECT BELOW:  !!! !!! !!! !!!
    this.age = age;             // AUGMENTING - Adding Methods and Properties to 'this' Object
    this.name = name;		    // To CREATE A NEW OBJECT -- 'this' LINKS to PROTOTYPE -- POINTER TO PROTOTYPE
    // 'this' is the OBJECT  (Object.Property)
    // 'name' -- is the NEW name (property for any NEW Object -- OVERRIDING Prototype name
    // 'age' -- is the NEW age (property) for any NEW OBJECT
}
// *******  EVERY FUNCTION HAS A PROTOTYPE PROPERTY, which contains an OBJECT  *****
// *******  The OBJECT is the one identified in the CONSTRUCTOR FUNCTION  *****

console.log(" --- ");
console.log(" --- ");
console.log(" ---  NewPUP.prototype:  ", NewPUP.prototype);      //  This is the OBJECT of NewPerson Function

console.log(" --- ");
console.log(" --- ");

//  ***********  INHERITANCE STEP:  LInk CONSTRUCTOR to PROTOTYPE (OBJECT):   !!!  !!!  !!!   ************
//  Function.prototype = Object (Prototype)  --  Assign PROTOTYPE (OBJECT) to Constructor Function -- INHERITANCE

NewPUP.prototype = PUP;                 // Constructor Function.prototype = Object (prototype)
                                        // Forming POINTER from CONSTRUCTOR to (.this) OBJECT (PROTOTYPE)

//  CREATE NEW OBJECT using the CONSTRUCTOR FUNCTION .this + PROTOTYPE

var Barn = new NewPUP("BARN", 10);


console.log ( 'Barn: ', Barn);
console.log ( 'Barn.name: ', Barn.name);
console.log ( 'Barn.age: ', Barn.age);
console.log ( 'Barn.color: ', Barn.color);

