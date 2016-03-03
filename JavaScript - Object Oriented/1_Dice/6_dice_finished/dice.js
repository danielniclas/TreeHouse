


//  OBJECT:
//  Container for values in the form of properties and functionality in the form of METHODS

//  var h1 = document.getElementById("header")  --  document OBJECT getElementByID() METHOD
//  METHODS provide functionality and RETURN values OR print something out

//  PROPERTIES can be accessed or assigned:  GETTING or SETTING

//  Review:
//  Objects provide functionality through METHODS.  METHODS may or may not return values
//  Objects provide data storage in properties
//  Name of property is the KEY
//  Content of the property is the VALUE

//  Three kinds of OBJECTS:
// 1.  Native OBJECTS in JS - Built in:  Number, String, Array, Boolean
// 2.  Host OBJECTS  --  Browser can be the HOST ENVIRONMENT:  document, console, Element - MANY host objects in browser, or Node
// 3.  Your own OBJECTS

//  Two important OBJECT characteristics:
//  1.  STATE -- Condition of all values at a particular point in time.  Can change the state of an object when you change the value of properties
//      State of an object is stored in its PROPERTIES
//  2.  BEHAVIOR -- behavior in its METHODS

//  OBJECT LITERAL:

var person = {
    name: "Lauren",
    treehouseStudent: true
};

//  Same -- KEYS are always strings

var person2 = {
    "name": "Lauren",
    "treehouseStudent": true
};

//  Access PROPERTIES:

//  person.name
//  person.treehouseStudent
// OR:
//  person["name"];
//  person["treehouseStudent"]



//  DICE CODE:
//  Build the Object

//  THIS
//  this is the OWNER OF THE FUNCTION -- the OBJECT that OWNS the METHOD that is CALLED


//  Creating Multiple Instances with Constructors

//  Object Literals have limitations  {}  -  great for one off objects or passing objects to a function

//  CONSTRUCTOR FUNCTIONS:
//  Describes how an object should be created
//  Create similar objects
//  Each object created is known as an INSTANCE of that OBJECT TYPE

//  function Contact(name, email) {
//  this.name = name;                                'this' means a NEW INSTANCE of the OBJECT -- like this = {}
//  this.email = email;
//  this.sendEmail = function () { do something}
//  }
//  var contact = new Contact("Daniel", "dniclas@sbcglobal.net");     contact --> this



function Dice(sides) {          //  CONSTRUCTOR FUNCTION -- create OBJECT and inherit the 'sides' PROPERTY.  'this' is the yet to be created OBJECT
  this.sides = sides;
}


//  PROTOTYPE PROPERTY:
//  The PROTOTYPE on a constructor function is an OBJECT (like an OBJECT LITERAL)
//  PROTOTYPES are TEMPLATES for OBJECTS -- shared by all INSTANCES of the PROTOTYPE

Dice.prototype.roll = function () {                                     //  ADD (INHERIT) METHOD to Dice OBJECT  (Anonymous Function)
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
};


var dice = new Dice(6);                 //  Instantiate dice OBJECT -- 6 sides
var dice10 = new Dice(10);              //  Instantiate dice OBJECT -- 10 sides

console.log("Comparison of two instantiated objects:  ", dice.roll === dice10.roll);
console.log("dice.roll: ", dice.roll);
console.log("dice10.roll: ", dice10.roll);