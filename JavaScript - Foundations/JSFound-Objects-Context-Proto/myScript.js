/* JavaScript OBJECTS */

//Object:  Data type  that associates KEYS and VALUES
//Array stores by numeric KEY or INDEX

// ***************************************************************************
//KEY and VALUE pairs:

// Object:  Daniel
// Variables associated with Daniel object are called PROPERTIES
// Functions associated with Daniel are called METHODS()
// Access PROPERTIES and METHODS using DOT NOTATION:  Daniel.name   Daniel.skills  Daniel.greet()


var Daniel = {
	name : "Daniel",
	skills : ["JS", "Ruby", "Farting"]
};

//READ VARIABLES from OBJECTS:    (DOT NOTATION)
console.log ('"Daniel" Object "name" is:' , Daniel.name);
console.log ('"Daniel" Object "skills" is:' , Daniel.skills);

//WRITE to (ASSIGN TO) VARIABLES:
Daniel.skills = "Barfing";             //RE-ASSIGNMENT - changes the entire value
console.log ('"Dan" Object "skills" after re-assignment2 is:' , Daniel.skills);
console.log(" ");

// ***************************************************************************
//KEY and VALUE pairs:

var Dan = {
	name : "Daniel", 
	skills : ["JS", "Ruby", "Farting"],
	"favorite color":  "green"              //Quotes required to contain this two word variable
};

//READ VARIABLES -- using BRACKETS  (BRACKET NOTATION)
console.log ('"Dan" Object "favorite color" is:' , Dan["favorite color"]);    //OTHER WAY to access key:VALUE

Dan["favorite color"] = "blue";

console.log ('"Dan" Object "favorite color" is:' , Dan["favorite color"]);    //OTHER WAY to access key:VALUE

console.log ('"Dan" Object "skills" before re-assignment is:' , Dan["skills"]);

Dan["skills"] = "Shitting";             //RE-ASSIGNMENT - changes the entire value

console.log ('"Dan" Object "skills" after re-assignment is:' , Dan["skills"]);

Dan.skills = "Barfing";             //RE-ASSIGNMENT - changes the entire value

console.log ('"Dan" Object "skills" after re-assignment2 is:' , Dan["skills"]);

console.log(" ");

// ***************************************************************************
//METHODS - add functions to OBJECT  --  function associated with a specific object


var dan = {								
	name : "Daniel the Great", 
	skills : ["JS", "Ruby", "Farting"],
	"favorite color":  "green",
	greet:  function () {                                   //FUNCTION
		console.log("XXX Function:  dan -- Hello I am " + dan.name);
	}
};

//console is an object : log is a key-function
console.log ('"Dan" Object "favorite color" is:' , dan["favorite color"]);

//OBJECT.METHOD():
dan.greet();

dan.name = "Cock Slicer"    //Change name key
//OBJECT.METHOD():
dan.greet();

console.log(" ");


var Nick = {								
	name : "Dork", 
	skills : ["JS", "Ruby", "Farting"],
	"favorite color":  "green",
	greet:  function () {                                  //FUNCTION
		console.log("XXX:  Nick -- Hello I am " + Nick.name);
	}
};

Nick.greet();

//EFFICIENCY IMPROVEMENT:  BETTER ABSTRACTION FOR NAME *******  CONTEXT (what object referring to) ***

var Dan = {								
	name : "Daniel the Great", 
	greet:  function (person) {                            //FUNCTION - with PARAMETER
		console.log("XXX:  Dan -- Hello I am " + person.name);
	}
};   //KEY and VALUE pairs

console.log ('"Dan" Object "favorite color" is:' , dan["favorite color"]);   //console is an object : log is a key-function
dan.greet();

var Nick = {								
	name : "Nick", 
	greet:  function (person) {
		console.log("Hello I am ZZZZZZZZ " + person.name);
	}
};   //KEY and VALUE pairs

Nick.greet(Nick);               //CALL function with ARGUMENT (CONTEXT of person we want to use)
Dan.greet(Daniel);              //Repetitive - adding Daniel (or Nick) to Dan.greet (or Nick.greet)

console.log(" ");
//BETTER ABSTRACTION FOR NAME *******  THIS  Object  --  THIS   THIS   THIS  THIS  --  APPLY CONTEXT
// Get CONTEXT of OBJECT of the METHOD being called



//  Stan --  OBJECT

var Stan = {
	name : "Stan the Great",
	greet:  function () {
		console.log("Yo Yo Hello I (Stan) am " + this.name);     //THIS applies the CONTEXT of THIS OBJECT
                                                          //THIS holds the value of OBJECT Dan
	}
};



console.log ('XXXX-XXXX "Dan" Object "favorite color" is:' , dan["favorite color"]);   //console is an object : log is a key-function
Stan.greet();
console.log("  ");



var Nick = {								
	name : "Nick the Fag", 
	greet:  function () {
		console.log("Yo Yo Yo Hello I (Nick) am " + this.name);     //THIS applies the CONTEXT of THIS OBJECT
                                                             //THIS holds the value of OBJECT Nick
	}
};

//THIS is given its value ONLY when it is CALLED  -- not when we write the method -- BINDING

Stan.greet();				//this- holds the value of Dan   -- BINDING  --  this is bound to Dan
Stan["greet"]();				//same
Nick.greet();				//this- holds the value of Nick  -- BINDING  --  this is bound to Nick

console.log(" ");

function whatIsThis() {
	console.log("What is 'this':  ", this);

whatIsThis();

    //THIS is referring to the GLOBAL OBJECT  --  "Window" (Inside the Browser) -- no binding here
    //variable is created as a property of the Global Object -- Window
    //There is no method binding associated with 'this'
}

// METHODS:  CALL and APPLY  *************************************************************
// Control value of THIS with Methods CALL and APPLY
// CHANGE CONTEXT ON THE FLY  *************************************************************

var stanGreet = Stan.greet;
stanGreet();  				// 'this' is the WINDOW  -- no binding

console.log(" ");
console.log("****Call and Apply****");


//We want stanGreet to be called with the context of Dan  -- bound to Dan.  Use CALL Method

//CALL Method and PASS value to bind to 'this'
//Pass the context:  Dan or Nick

//CALL is a Method that INVOKES ITSELF  -- literally calls danGreet -- value to bind to this ()
//Change context on the fly - NO MATTER WHERE THE METHOD RESIDES

console.log("CALL() METHOD ");
console.log(" ");

stanGreet.call(Dan);         //CONTEXT (BINDING) to OBJECT: Dan  -- 'this' becomes Dan
stanGreet.call(Nick);        //CONTEXT (BINDING) to OBJECT: Nick   -- 'this' becomes Nick
stanGreet.call();            //CONTEXT (BINDING) to OBJECT: undefined
stanGreet.call({name:  "Amit the Punj"});

Stan.greet.call(Dan);
Stan.greet.call(Nick);

console.log(" ");

//APPLY  *************************************************************

stanGreet.apply(Dan);
console.log(" ");

var Jim = {								
	name : "James the Bloated", 
	greet:  function (name, mood) {
		
		name = name || "YOU";		//if name is undefined or false use "you".  || OR Operator
		mood = mood || "GOOD";		//if mood is undefined or false use "good".  || OR Operator

		console.log("XXX:  Jim -- Hello, " + name + " I am " + this.name + 
		" and I am in a " + mood + " mood!");
	}
};  

var Dick = {
	name : "Dick the Fag",
	greet:  function (name, mood) {

        name = name || "TIT";		//if name is undefined or false use "you".  || OR Operator
        mood = mood || "ASS";		//if mood is undefined or false use "good".  || OR Operator

		console.log("XXX:   DICK:  My balls are named:   " + this.name);
	}
};

var xGreet = Jim.greet;		//assign Method -- Jim.greet -- to variable:  xGreet
var yGreet = Dick.greet;


console.log("xGreet() and yGreet()");
xGreet();
yGreet();

xGreet.call(Dan);			//call Method Jim.greet and pass context Dan
xGreet.call(Dick);			//call Method Jim.greet and pass context Dick

xGreet.call({name:  "Amit the Punj"});

Jim.greet.call(Dan);
Jim.greet.call(Dick);
Jim.greet.call(Jim);

Dick.greet.call(Jim);

Jim["greet"] ("Ryan" , "fucking hungry");

xGreet.call({name:  "Amit the Punj"}, "VOMIT", "BARF");    //Pass arguments to the greet Method

//APPLY:  Context + [Array]    -- only diff how you enter arguments - AS AN ARRAY


console.log(" ");
console.log("APPLY() METHOD ");
xGreet.apply(Nick, ["SHIT", "FUCK"]);
xGreet.apply({name:  "DORK THE TOOL"}, ["SHIT", "FUCK"]);

console.log(" ");

//BIG USEFULNESS OF APPLY:   Pass args as an array  -- PASS ARGS AS AN ARRAY!  ******************

var args = ["Nutsack", "Sweaty"];					//set args in an array and pass the array
Jim.greet.apply(Nick, args);


// PROTOTYPES 1: *******************************************************************************

//Object Oriented Programming -- Programming based around creating and using objects

//PERSON PROTOTYPE:   (still an OBJECT tho)

var personPrototype = {
	
	name:  'ANONYMOUS',

	greet:  function (name, mood) {
		
	name = name || "You";					//if name is undefined or false use "you".  || is or	
	mood = mood || "good";					//if mood is undefined or false use "good".  || is or

	console.log("XXX:  PersonPrototype -- Hello, " + name + " I am " + this.name + 
	" and I am in a " + mood + " mood!");
	},

	species:  'Homo Sapien'
};

// Create new personPrototype object and create a new copy and override what we want to override

//PROTOTYPAL INHERITANCE  -  inherit keys from a prototype

//1.  Create a CONSTRUCTOR FUNCTION:  Capital P -- clarifies this is a CONSTRUCTOR

function Person (name) {

	this.name = name;		// CREATE A NEW OBJECT:  this is an object.
	                        // CREATE A NEW OBJECT for us and binds the new object to this in the constructor function
							// THIS IS AN OBJECT THAT KNOWS ITS PROTOTYPE  -- POINTER TO PROTOTYPE
}

Person.prototype = personPrototype;    //2.  KEY LINE!!!!  //'prototype' is itself an object

Mook = new Person ("MOOK");      //3.  Create a NEW OBJECT called Mook  - Object that points to person.Prototype
Koost = new Person ("KOOST");    //  Create a NEW OBJECT called Koost + name:  KOOST + CONTEXT:  personPrototype

console.log(" ");

Mook.greet('Bones', 'Poop');
Koost.greet('FRUIT', 'BOWL');

console.log(" ");

//  PROTOTYPES 2:  *******************************************************************************

console.log("XXX: ", Mook.name, Mook.species);
console.log("XXX: ", Koost.name, Koost.species);
console.log(" ");

//  Change species for ALL people:
Person.prototype.species = "Bark-Box";

console.log("XXX: ", Mook.name, Mook.species);
console.log("XXX: ", Koost.name, Koost.species);
console.log(" ");

//  Change species for ONE person:
Koost.species = "SOOPER kOOtie";

console.log("XXX:  Mook", Mook.name, Mook.species);
console.log("XXX:  Koost", Koost.name, Koost.species);
console.log(" ");

Mook.species = "Mook-a-pillar";

console.log("XXX:  Mook", Mook.name, Mook.species);
console.log("XXX:  Koost", Koost.name, Koost.species);
console.log(" ");

//  Change species for ALL people:                  //DOES NOT DO ANYTHING!!!!
Person.prototype.species = "Bark-Box";              //DOES NOT DO ANYTHING!!!!

console.log("XXX: ", Mook.name, Mook.species);
console.log("XXX: ", Koost.name, Koost.species);
console.log(" ");


//ADD attributes to Person.prototype

Person.prototype.favoriteColor = "RED";

console.log("XXX:  Mook", Mook.name, Mook.species, Mook.favoriteColor);
console.log("XXX:  Koost", Koost.name, Koost.species, Koost.favoriteColor);

Koost.favoriteColor = "BLACK";

console.log("XXX:  Mook", Mook.name, Mook.species, Mook.favoriteColor);
console.log("XXX:  Koost", Koost.name, Koost.species, Koost.favoriteColor);

console.log(Mook.toString());

//  **********************  OBJECT/PROTOTYPE/CONSTRUCTOR FUNCTION  1500+    *******************************

//  FUNCTIONS:
//  1.  simplest usage pattern is the function call.
//  2.  Methods in JavaScript are nothing more than object properties that happen to be functions.
//  3. Use of functions is as CONSTRUCTORS
//  EVERY FUNCTION has a PROTOTYPE PROPERTY which contains an OBJECT

//  GLOBAL OBJECT:
//  All GLOBAL VARIABLES are PROPERTIES of the GLOBAL OBJECT
//  If host environment is the web browser -- the GLOBAL OBJECT is called WINDOW

//  OBJECT = personObject  --  CREATED with LITERAL NOTATION  --  This OBJECT can serve as a PROTOTYPE


// *******  EVERY FUNCTION HAS A PROTOTYPE PROPERTY, which contains an OBJECT.  *****
// When this function is invoked using the 'new' operator, an OBJECT IS CREATED and this object has a secret link
// to the PROTOTYPE OBJECT. The secret link (called __proto__ in some environments) allows methods and
// properties of the prototype object to be used as if they belong to the newly-created object.
//

// Every OBJECT has a CONSTRUCTOR.
// The PROTOTYPE is an OBJECT, so it must have a CONSTRUCTOR too. Which in turn has a PROTOTYPE.

//  Object object [ Object() object ] is the highest level parent -- and every object inherits from it

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

var Barn = new NewPUP("BARN", 10);  // CREATE NEW OBJECT called 'Barn' -- linked to prototype object


console.log(" ");
console.log(" ");
console.log(" --- Barn --- ");
console.log("Barn.name:  ", Barn.name);         // BARN
console.log("Barn.species:  ", Barn.species);   // Homo Sapien
console.log("Barn.age:  ", Barn.age);       // RED
console.log("Barn.color:  ", Barn.color);       // RED
console.log("CONSTRUCTOR Property -- Barn.constructor:  ", Barn.constructor);
console.log("NewPUP.prototype:  (Function.prototype):  ", NewPUP.prototype);
console.log(" --- ");
console.log("Barn Properties (enumerable or not):  ", Object.getOwnPropertyNames(Barn).sort());
console.log("Object.keys(Barn):  ", Object.keys(Barn));
Barn.greet('NOCKLES', 'HAPPY');
console.log(" --- ");
console.log(" ");
console.log(" ");

//  Get all properties values of a Javascript Object (including inherited from PROTOTYPE) *****  for in loop

for(var key in Barn) {
    var value = Barn[key];

    console.log(" --- Barn Properties:  --- ", value);
}



var Sam = new NewPUP ("SAM", 8);    // CREATE NEW OBJECT called 'Sam'  -- linked to prototype object
console.log(" --- ");

//  INVOKE OBJECT PROPERTIES:

Barn.greet('BBB', 'Poop');      // INVOKE greet() METHOD from SPAWNED OBJECT Barn

Sam.greet('SSS', 'Bone');       // INVOKE greet() METHOD from SPAWNED OBJECT Sam

console.log(" --- ");

console.log("PUP.isPrototypeOf(Barn):  ", PUP.isPrototypeOf(Barn));
console.log("PUP.isPrototypeOf(Sam):  " , PUP.isPrototypeOf(Sam));

console.log(" --- ");

//  AUGMENTING -- Adding Methods and Properties Using the Prototype -- AUGMENTING

function Gadget (name, color) {
    this.name = name;
    this.color = color;
    this.whatAreYou = function(){
        return 'I am a ' + this.color + ' ' + this.name;
    };
}
//  ADDING METHODS and PROPERTIES to the Prototype Property of the Constructor Function - ANOTHER WAY

Gadget.prototype.price = 100;
Gadget.prototype.rating = 3;
Gadget.prototype.getInfo = function() {
    return 'Rating: ' + this.rating + ', price: ' + this.price;
};

//  OVERWRITE the PROTOTYPE COMPLETELY -- Replacing it with an OBJECT of your choice:

Gadget.prototype = {
    price: 222,
    rating: 4,
    food: "beer",
    getInfo: function () {
        return 'Rating: ' + this.rating + ', price: ' + this.price;
    }
};

console.log("ZZZ  Gadget.prototype:  ", Gadget.prototype);
console.log(" --- ");

var newToy = new Gadget('radio', 'black');          //  CREATE new OBJECT using GADGET CONSTRUCTOR

console.log("newToy:  CONSTRUCTOR:  ", newToy.constructor);
console.log("newToy.name:  ", newToy.name);
console.log("newToy.color:  ", newToy.color);
console.log("newToy.food:  ", newToy.food);
console.log("newToy.rating:  ", newToy.rating);
console.log(" --- ");

//  PROTOTYPE CHAINING  *********************************

//  Three CONSTRUCTOR Functions:

function Shape() {
    this.name = 'shape';
    this.shit = 'SHIT';
    this.toString = function () {
        return this.name;};
}

function TwoDShape(){
    this.name = '2D shape';
    this.vomit = 'VOMIT';
}

function Triangle(side, height) {
    this.name = 'Triangle';
    this.side = side;
    this.height = height;
    this.getArea = function(){return this.side * this.height / 2;};
}

TwoDShape.prototype = new Shape();        // Replace prototype OBJECT with Shape()  -- 'new' operator creates OBJECT
console.log("ZZZZZZ -- TwoDShape.prototype.name:  ", TwoDShape.prototype.name);  //  --> shape

Triangle.prototype = new TwoDShape();     // Replace prototype OBJECT with TwoDShape()
console.log("ZZZZZZ -- Triangle.prototype.name:  ", Triangle.prototype.name);   //  --> 2D shape -- from TwoDShape()
console.log("ZZZZZZ -- Triangle.prototype.vomit:  ", Triangle.prototype.vomit); //  --> VOMIT -- from TwoDShape()
console.log("ZZZZZZ -- Triangle.prototype.shit:  ", Triangle.prototype.shit);   //  -->  SHIT -- from Shape()
var triangle1 = new Triangle();
console.log("ZZZZZZ -- triangle1.name:  ", triangle1.name);   //  -->  Triangle
console.log("ZZZZZZ -- triangle1.vomit:  ", triangle1.vomit);   //  -->  VOMIT -- from TwoDShape()
console.log("ZZZZZZ -- triangle1.shit:  ", triangle1.shit);   //  -->  SHIT -- from Shape()

console.log("PROTOTYPE CHAINING Example:  ", triangle1.toString());  // --> triangle1 OBJECT = new Triangle
console.log(" --- ");

var my = new Triangle(5, 10);

console.log(my.getArea());  //25
console.log("XXX:  ", my.toString());  //Triangle  --  LOOPS all the way to Shape()  for toString and uses Triangle as name
console.log(" --- ");




//  OBJECTS  ******************************************
//  Object instances are suited for storing and transmitting data around an application

//  1.  CREATE -- 'new' OPERATOR:

var person = new Object();
person.name = "Daniel";
person.age = 48;

console.log("Daniel name is:  ", person.name);
console.log("Daniel name is:  ", person["name"]);

console.log(person.hasOwnProperty("name"));
console.log("window.isPrototypeOf(person):  ",window.isPrototypeOf(person));
console.log(person.toString());


//  2.  CREATE - Literal Notation:

var person1 = {
    name: "Koob",
    age: 48
};

console.log("Koob name is:  ", person1.name);

//  3.  ANOTHER WAY TO CREATE AN OBJECT:  -- with a function --  CONSTRUCTOR

function factory(name){
    return{
        name:name
    };
}
var o = factory('one');
console.log("OBJECT FACTORY:  ", o.name );

//  OBJECTS:  ALTERING PROPERTIES AND METHODS

person.drink = "beer";
person.food = "burger";

console.log("Person Object:  ", person);