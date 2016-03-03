/* JavaScript Functions */

//ARGUMENTS
//get out of console and into page


function sayHello () {

	console.log("Hello World!");

}

sayHello();
sayHello();
sayHello();


//  FUNCTION -- takes an INPUT (ARGUMENT) performs an ACTION and RETURNS and OUTPUT

//Take ARGUMENTS and RETURN values   *********************************************

//ARGUMENT -- Input to a function
//RETURN --  Output from a function

function sayHerro (name, greeting) {

	if (typeof greeting === 'undefined')			//set default greeting in-case no argument is included
    { greeting = 'Hello';  }

	console.log(greeting + " World! " + name);
}

sayHerro();                     //'name' is undefined  (so is 'greeting' but defined in function
sayHerro("Jim", "FU");          //both variables are defined
sayHerro("Jim");                //'greeting' is undefined

//  RETURN a value  ********************************************************
//  RETURN VALUE  --  Output from a function
//  VALUE of the EXPRESSION previously called

function Yo (name, greeting) {

    if (typeof greeting === 'undefined')
    { greeting = 'Hello';  }

    console.log(greeting + " World! " + name);

    return "Done";                              //  RETURN
}

Yo();                     //'name' is undefined  (so is 'greeting' but defined in function
Yo("Jim", "FU");          //both variables are defined
Yo("Jim");                //'greeting' is undefined

console.log("  ");
console.log(Yo("Dork", "Blow Me"));
console.log("  ");

//    ********************************

function Sup (name, greeting) {

    if (typeof name === 'undefined')
    {  return 0 ; }

    if (typeof greeting === 'undefined')
    { greeting = 'Hello';  }

    console.log(greeting + " World! " + name);      //Printing to console

    return name.length;                              //  RETURN
    //  NOTHING HAPPENS AFTER RETURN !!!!!!!!!!!!!!!!!!!!!!!
    console.log("This will never print!!");
}

console.log("  ");
console.log(Sup("XXX", "Blow Me"));                 //Logging RETURN value
console.log("  ");

Sup();                     //'name' is undefined  (so is 'greeting' but defined in function
Sup("XXX", "Barg");          //both variables are defined
Sup("XXX");                //'greeting' is undefined

console.log("With name undefined, expect to return '0':  " + Sup());    //'name' is undefined and function will return 0
console.log("  ");
console.log("  ");

//  ***************************************************************************************
//SCOPE  SCOPE  SCOPE  SCOPE   SCOPE    --  var keyword!!   SCOPE    SCOPE    SCOPE   SCOPE
//  ***************************************************************************************

var color = 'black';			    //GLOBAL SCOPE -- created outside of any function
var number1 = 1;
var number2 = 5;
var food = "burger";

function showColor () {             //NAMED FUNCTION SYNTAX --

    var color = 'green';			//New SCOPE (LOCAL) -- SHADOWING -- New namespace to define variables in --
    number1 = 2;					//CHANGING GLOBAL primitive variable!!!!!  Dangerous -- use var
    var number2 = 10;               //LOCAL SCOPE  --  SHADOWING
    shape = 'square';				//JS assigns as a GLOBAL VARIABLE - !BUG! -- from within the function
    var car = "VW";                 //LOCAL

//Can access HIGHER LEVEL variables from within our function - LOCAL and GLOBAL
	console.log('Function -- showColor color:  ' , color);		//LOCAL -- inside a function - will not collide with anything from higher scope --  SHADOWED
	console.log('Function -- showColor number1:  ' , number1);  //GLOBAL
    console.log('Function -- showColor number2:  ' , number2);  //LOCAL
    console.log('Function -- showColor shape:  ' , shape);      //GLOBAL
    console.log('Function -- showColor food:  ' , food);        //GLOBAL
    console.log('Function -- showColor car:  ' , car);          //LOCAL
    console.log("  ");
}

showColor();

//CAN NOT ACCESS THE LOCAL VARIABLES FROM OUTSIDE THE FUNCTION  ******
    console.log('Global Color:  ', color);          //GLOBAL
    console.log('Global number1:  ' , number1);     //GLOBAL
    console.log('Global number2:  ' , number2);     //GLOBAL
    console.log('Global shape:  ' , shape);         //GLOBAL
    console.log('Global food:  ' , food);           //GLOBAL
    //console.log('Global car:  ' , car);           //LOCAL         ---  ERROR:  undefined
    console.log("  ");

//  ***************************************************************************************
//ANONYMOUS FUNCTIONS     declared variable function as opposed to a NAMED function
//  ***************************************************************************************

// Named function syntax:  function myFunction () {}
//myFunction();

//ANOTHER WAY: ANONYMOUS FUNCTION -- function stored in a variable

var myFunction = function () {

	console.log('My ANONYMOUS function --  myFunction was called')
};

//ANONYMOUS function that calls a function twice:   PASS A FUNCTION AS AN ARGUMENT  --

var callTwice = function (targetFunction) {
	targetFunction();               //INVOKE the function passed to the argument (as a variable)
	targetFunction();               //INVOKE the function passed to the argument (as a variable)
}

callTwice(myFunction);              //PASS the function as an argument -- function stored as variable

console.log("  ");


// *************************************
//PASS NAMED FUNCTION to ANONYMOUS FUNCTION

function myFunc () {                            //  NAMED FUNCTION

	console.log('My NAMED function was called')
	//undeclaredVariable;   //  ERROR OUT:  check CALL STACK
};


var callTwice = function (targetFunction) {     //  ANONYMOUS FUNCTION
	targetFunction();
	targetFunction();
}

callTwice(myFunc);          //PASS NAMED FUNCTION to ANONYMOUS FUNCTION

console.log("  ");

// *************************************

//PASS ANONYMOUS function --  LESS info in Error call stack  -- less helpful

var callTwic = function (targetFunction) {
	targetFunction();
	targetFunction();
}

callTwic(function () {					// ANONYMOUS FUNCTION -- NO NAME, NO VARIABLE:  Bad for debugging
	console.log("Hello from anonymous function");   //pass the ENTIRE anonymous function
	//undeclaredVariable;     //  ERROR OUT:  check CALL STACK
});

console.log("  ");

// *************************************
//SELF EXECUTING ANONYMOUS FUNCTION
// To CREATE NEW SCOPE  --   CREATE NEW SCOPE!!!!!!
// *************************************


function tempFunction () {
	var a,b,c;
	//....   Keep variable contained within this scope
 }

tempFunction();

//SHORT HAND WAY:
//Anonymous function to execute right here -- surround function with ()  and then call it immediately ()
//CREATE PRIVATE SCOPE for variables

(function (a,b) {
	var a,b,c;
	console.log ('WEIRD - NON FUNCTION -- CALL IMMEDIATELY', a, b);
	//....   Keep variable contained within this scope
 })  ("Crazy Shit", 22) ;              //  --Call function immediately --

console.log("  ");
// ***************************************************************************
//FUNCTIONS in COMMON JS OPERATIONS:
//Practical Examples  --  browser specific code
// ***************************************************************************

//DOM - Document Object Model - DOM DOM DOM DOM DOM DOM DOM DOM DOM DOM
//jQuery - Library - JS CODE written to take into account diffs between browsers

//DOM -- Interface to actual elements in the page

// ***************************************************************************

//JS to interact with a page:

//button is a DOM element:
var button = document.getElementById('action');        //DOM!  document  -- pas ID of button object
//input is a DOM element:
var input = document.getElementById('text_field');	   //DOM!  document  -- pas ID of text-field object

button.onclick = function () {              //OLD WAY

	console.log ("Button Clicked");
};

button.onclick = function () {              //OLD WAY - ONLY ONE OF THESE WILL WORK at a time!
                                            //onclick can only hold one thing

	console.log ("Other click listener");
};

//onclick can only hold one thing

//EVENT LISTENER  -- BETTER -- does not work on IE  :-)

button.addEventListener('click', function () {

	console.log ("EVENT LISTENER:  Button Clicked");
	input.setAttribute('value', 'Box Filler')           //manipulate value of input

	});


//FUNCTIONS  JS 1500    *************************************************

// EXPRESSIVE FUNCTION -- Function Expression   (ANONYMOUS FUNCTION)
    // Loads only when interpreter reaches that line of code
    // If you try to call a Function Expression before it is loaded, you get an ERROR

    var someFunction = function () {
        return 1+2;
    }
    console.log("Value of Expressive Function someFunction:  " + someFunction());  //CALL FUNCTION AFTER
    console.log("");

// DECLARATIVE FUNCTION -- Function Declaration -- HOIST  --  Can be anonymous???
    // Loads BEFORE any code is executed
    // No code can be called until all declarations are loaded

    console.log("Value of Declarative Function:  " + someFunction());  //CALL FUNCTION FIRST

    function someFunction() {
        return 1+2;
    }

    console.log("");

//  NAMED FUNCTION:

    function myFunc () {
        return 11 + 11}

    console.log("My NAMED Function:  11+11 = " + myFunc());
    console.log("");

//  ANONYMOUS FUNCTION

    var myFunction = function () {
    console.log('My ANONYMOUS Function -->  myFunction was called')
    };

    myFunction();
    console.log("");


//  CALLBACK Function -- FUNCTIONS AS ARGUMENTS

    // Callback functions are derived from a programming paradigm called functional programming.
    // At a simple and fundamental level, functional programming is the use of FUNCTIONS AS ARGUMENTS.

    // Functions are FIRST CLASS OBJECTS in JS -- can treat Functions like Objects
    // Pass functions around like variables and return them in functions and use them in other functions.
    // CALL BACK Function  -- passed to forEach Method/Function

    //  Pass an anonymous function (a function without a name)
    // to the forEach method as a PARAMETER.

    var friends = ["Mike", "Stacy", "Andy", "Rick"];

    friends.forEach(function (value, index) {       //CALL BACK FUNCTION
        console.log(index + 1 + " . " + value);
    });

    console.log("");


//  Anonymous CallBack Functions

//  CLOSURES

    //CLOSURE -- ENCAPSULATION -- Function INSIDE of function - has access to higher level variables

    function outer (name) {
        var hello = "hi";

        return function inner () {         // RETURN a function
            return hello + " " + name;
        };
    }
    var name1 = outer("mark");  // assign INVOCATION to variable -- outer(ARGUMENT)
    var name2 = outer("vick");
    var name3 = outer("mook");
    var name4 = outer("koob");

    console.log(name1);
    console.log(name2());     // log the RETURN FUNCTION -- INVOKE the 'inner' function
    console.log(name3());
    console.log(name4());
