/* JavaScript Strings */

var name = "Jim";
console.log(name);

var name2 = 'Jim';
console.log(name2);

var statement = "This is Jim's string";
console.log(statement);

var statement2 = 'He said "This is awesome"';
console.log(statement2);

var statement3 = 'He said "This is Jim\'s string"';  //use ESCAPE CHARACTER \ 
console.log(statement3);



/* JavaScript Strings */

var name = "Jim";
console.log(name);

var name2 = 'Jim';
console.log(name2);

var statement = "This is Jim's string";
console.log(statement);

var statement2 = 'He said "This is awesome"';
console.log(statement2);

var statement3 = 'He said "This is Jim\'s string"';
console.log(statement3);

var path = "C:\\folder\\myfile.txt";
console.log(path);

var multiline = "This is line 1\nThis is line 2\nThis is line 3";  // New Line Character \n  
console.log(multiline);

var multiline = "This is line 1\nThis is line 2\nThis \tis line 3 with Tab";  // Tab Character \t 
console.log(multiline);

/* JavaScript Strings - Concatenation*/

var multiline = "This is line 1\n"+
"This is line 2\n"+
"This is line 3";
console.log(multiline);

var part1 = "Hello ";
var part2 = "World!";
var whole = part1 + part2;
console.log(whole + "!!!!!" + " vomit now...");

/* JavaScript Strings - Methods */
//STRIMG METHODS:

console.log("  ");

var x = whole.length;       //.length METHOD   remember var whole = part1 + part2  (Hello World)
console.log(x);

var length = whole.length;
console.log(whole, length);  //whole variable from above

var index = whole.indexOf("World");    //.indexOf METHOD   index of substring within larger string --  character number
console.log(index);

var index2 = whole.indexOf("world");   //"world"  is not in the string -- returns value of -1
console.log(index2);

if (whole.indexOf("W") !== -1) {
  console.log("W exists in string");
} else {
  console.log("W does not exist");
}


console.log(whole.charAt(0));   //.charAt METHOD     ZERO BASED
console.log(whole.charAt(1));   //.charAt METHOD
console.log(whole.charAt(2));   //.charAt METHOD
console.log(whole.charAt(3));   //.charAt METHOD
console.log(whole.charAt(4));   //.charAt METHOD

/* JavaScript String  METHODS 2 */


var part1 = "Hello ";
var part2 = "World!";
var whole = part1 + part2;
console.log("XXX " + whole + "!!!!!");


var world = whole.substr(6,5);    //.substr METHOD   (start index position. length) to pull out
console.log(world);

console.log(whole.toLowerCase());  //.toLowerCase()
console.log(whole.toUpperCase());
console.log(whole);

/* JavaScript Strings  -- Comparing Strings*/


var first = "Hello";
var second = "hello";

if (first === second) {
  console.log("The strings are equal");
} else {
  console.log("The strings are different");
}

if (first.toLowerCase() === second.toLowerCase()) {
  console.log("The strings are equal");
} else {
  console.log("The strings are different");
}

function compare (a, b) {                  	//creating function called compare and using it below
  console.log(a + " < " + b , a < b);		//function is like a METHOD.  invode Method below with arguements
}

compare('a', 'b');							//USING METHODS/FUNCTIONS  -- return true or false
compare('a', 'A');
compare('apples', 'oranges');
compare('apples', 'applications');
compare('app', 'apples');
compare('hello', 'hello');

function barf (a, b) {                  	//creating function called compare and using it below
  console.log("BARF " + a + " < " + b , a < b);		//function is like a METHOD.  invode Method below with arguements
}

barf('a', 'b');							//USING METHODS/FUNCTIONS  -- return true or false
barf('a', 'A');
barf('apples', 'oranges');
barf('apples', 'applications');
barf('app', 'apples');
barf('hello', 'hello');