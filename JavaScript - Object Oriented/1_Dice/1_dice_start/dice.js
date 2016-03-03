

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


function diceRoll() {
  var sides = 6;
  var randomNumber = Math.floor(Math.random() * sides) + 1;
  console.log(randomNumber);
}

var dice = {

};