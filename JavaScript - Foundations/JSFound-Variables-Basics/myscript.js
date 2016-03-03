/* JavaScript Foundations: Variables */

var color = "red";

var myDiv = document.getElementById('myDiv');

myDiv.style.background = "black";
myDiv.style.color = "#ffffff";

var myVar;

//undefined = true;

console.log (myVar);
console.log(typeof myVar === "undefined");  // should evaluate to true.  === operator testing for equality
console.log(myVar === undefined);  // undefined is a keyword

// undefined and null are FALSY values and if will not execute

var x = null;

if (myVar) {
	console.log("if");	
} else {
	console.log("else");
}

if (x) {
	console.log("if");	
} else {
	console.log("else");
}

if (x == null) {
	console.log("if");	
} else {
	console.log("else");
}

if (x == myVar) {
	console.log("if");	
} else {
	console.log("else");
}

//SCOPE and FUNCTIONS
//Variable created inside function can only be used INSIDE of that function
//FUNCION SCOPE

//

var world = "World!";  //Global Scope

function sayHello() {
	var hello = "Hello ";   //Local Scope
	console.log( hello + world);
}

sayHello();  //invoke sayHello function
console.log ("world outside of the funtion sayHello():  " , world);
//console.log ("hello outside of the funtion sayHello():  " , hello);  //Uncaught ReferenceError: hello is not defined 


function sayHello() {
	var hello = "Hello ";   //Local Scope
	
	function inner () {
		var extra = " There is more!";
		console.log( hello + world + extra);  //hello and extra are all inside the high level function.  world is Global
	}
	
	inner();
}

sayHello();  //invoke sayHello function

//SHADOWING    ***********************************
// Two variables with same name - GLobal and Local

console.log("  ");



var myColor = "blue";  //Global Scope myColor

console.log("myColor before myFunc", myColor);

function myFunc () {
	var myColor = "yellow";
	
	// **** IMPORTANT BUG WARNING:   GLOBAL VARIABLE ASSIGNED:   *****
	myNumber = 42;  //If this variable does not exsit yet, JS will CREATE A GLOBAL VARIABLE - BUG WARNING!!!  Use var keyword
	
	console.log ("myColor inside myFunc()", myColor);  //Local Scope myColor - CAN NOT access Global myColor from inside this fucntion
}

myFunc();

console.log ("myColor after myFunc()", myColor);
console.log ("myNumber after myFunc()", myNumber);


/*
var myColor = "blue";  //Global Scope myColor

console.log("myColor before myFunc", myColor);

function myFunc () {
	myColor = "yellow";   //RESETTING THE GLOBAL VARIABLE!!!!!!!!
	console.log ("myColor inside myFunc()", myColor);  //Local Scope myColor - CAN NOT access Global myColor from inside this fucntion
}

myFunc();
console.log ("myColor after myFunc()", myColor);
*/

//HOISTIUNG   ***********************************

console.log("  ");

function doSomething (value) {
	
	var color = "blue";   //var keyword has functional scope
	var number;  //declaration inside function -- var number really declared on top of the function - declaration HOISTED
	
	if (value) {
		var color = "red";  //same as:  color = "red";
		number = 10;  
		console.log("Color in if(){}: ", color);
	}
	
	console.log("Color after if(){}: ", color);    //var color still in the same functional scope  - if block is NOT a new function
}

doSomething(false);

doSomething(true);

//KEEP VARIABLE DECLARATIONS AT TOP OF FUNCTIONS!!!!!!!!!!!!!!!!!!!
