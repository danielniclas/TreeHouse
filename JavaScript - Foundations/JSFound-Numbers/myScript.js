/* JavaScript Numbers */

//Whole Numbers
var a = 11;
var b = -123;


var c = 1.5;
var d = 123.456;

//All numbers in JS are FLOATING POINT

var e = 0.1;
var f = 0.2;

var result = e*f;   

//Large Numbers

var g = 1000000;
var h = 1E6;   //same thing
var i = 1.23E16;

var j = 012;   //this is 10.  interpreted as octyl

var k = 0xff  //0x  notation for hexadecimal

//Get number out of a Sting

var l = parseInt("197");  //parseInt METHOD
var m = parseInt("012");  //parseInt METHOD

var n = parseInt("019", 10);  //parseInt METHOD    add the radix 10 for base 10
var o = parseInt("012", 10);  //parseInt METHOD    add the radix 10 for base 10
console.log("Number is:  "+ o);

var p = parseInt("010111", 2);  //parseInt METHOD    Parse BINARY
console.log("Number is:  "+ p);

var q = parseInt("42 people", 10);  //parseInt METHOD    Parse BINARY
console.log("Number is:  "+ q);

var r = parseInt("There are 42 people", 10);  //parseInt METHOD    Parse BINARY
console.log("Number is:  "+ r);
console.log(r === NaN);       //NaN is never equal to itself
console.log(isNaN(r));       //Use the isNaN function

var s = parseFloat("0123.456 is a strange number");    //parseFloat
console.log("Number is:  "+ s);

//OPERATORS

var t = 1 + 2;
console.log("Sum is:  " + t);

var u = 15 % 10;
console.log("Modulo remainder of 15 divided by 10 is:  " + u);

//COMPARISONS

console.log(1<2, 1>2, 1>=2, 1!=2, 1!==2,1 == "1", 1 === "1");  //returns true   === checks also for same type
console.log (1 === parseInt("1",10));
console.log (1 !== parseInt("3",10));

if (1<2) {
	console.log("yes");
} else {
	console.log ("No");
}

//The MATH OBJECT   Math

var v = Math.random();
console.log ("Random number is:  ", v);

var w = Math.random() * 10;   				//Random number between 0 and 10
console.log ("XXX: Random number between 1 and 10 is:  ", w);
console.log ("XXX: Rounded:  " + Math.round(w));
console.log ("XXX: Rounded Down:  " + Math.floor(w));
console.log ("XXX  Rounded Up:  " + Math.ceil(w));

var w = Math.round(Math.random() * 10);   				//Random number between 0 and 10 -- rounded to nearest number (round up from .5)
console.log ("Random number -rounded - between 1 and 10 is:  ", w);

var w = Math.floor(Math.random() * 10);   				//Random number between 0 and 10 -- rounded - round down
console.log ("Random number -rounded down - between 1 and 10 is:  ", w);

var w = Math.ceil(Math.random() * 10);   				//Random number between 0 and 10 -- rounded - round up
console.log ("Random number -rounded up - between 1 and 10 is:  ", w);

var x = Math.pow(2,5);
console.log ("Power:  ", v);

var x = Math.sqrt(5);
console.log ("Square Root:  ", v);
