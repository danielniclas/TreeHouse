/* JavaScript Arrays */
//Store more than one value into a single variable
//Arrays:  List of values
//unknown number of objects to store

var x = ['some', 'extra', 'word', 'here'];
console.log("Number of elements in the array:  ", x.length);   //property .length on our x array

var y = ['a string', 3, true, 'treehouse', function (a,b) {return a + b;}]
console.log(y)
console.log("Number of elements in the array:  ", y.length);   //property .length on our x array

//add array into an array:

var y = ['a string', 3, ['a sub array',2,3,4], true, 'treehouse', function (a,b) {return a + b}];
console.log(y)
console.log("Number of elements in the array:  ", y.length);   

//Empty array:

var z = [];
console.log("Empty array:  ", z);

//Array Constructor:   Create array with length assigned to it
var a = new Array ();

var a = new Array (50);   //pass number to Array constructor
console.log("Array Constructed with 50 Elements:  ", a.length);

//Getting and Setting

var my_array = ["Hello", 42, true, function (a) {return a*2}];
console.log(my_array);
//indexes in arrays are zero based

var word = my_array[0];   //pull index zero from array
console.log(word);
var answer = my_array[1];
console.log(answer);
var doubler = my_array[3];    //variable doubler contains a function
console.log("Using function stored in variable 'doubler':  " , doubler(10));

function double (a) {return a*2};    //Same Thing!!!
console.log("Using function name with variable 'double':  " , doubler(40));

//Setting Values:
//change 42 to different number

my_array[1] = 144;
var new_answer = my_array[1];
console.log(new_answer);

my_array[4] = "A new string";
my_array[14] = "A new string at 14";

//add to end of array

console.log("updated array length:  ", my_array.length);
my_array[my_array.length] = "Add element to end of array"
console.log("Longer array content:  ", my_array);

//Methods for Arrays - Part 1:
// Push and Pop

//Push value at end of array - append new value to end of array
var my_array = [2,3,4];
console.log(my_array.toString());

my_array.push(5);
console.log("XXX PUSH:  ", my_array.toString());

//Pop - returns a value - last value of the array and removes it from the array

var value = my_array.pop()
console.log("value removed: ", value);
console.log(my_array.toString());

//Unshift and Shift - remove and add on beginning of the List

my_array = [2,3,4];
console.log(my_array.toString());

my_array.unshift(1);
console.log(my_array.toString());

var value = my_array.shift();     //no   arguement
console.log(my_array.toString());
console.log(value);

//Methods for Arrays - Part 2:
//Array Sorting - sort array in place

var my_array = [10, 44, 32, 100, 0, 44, 3, 4];
console.log("XXX my_arry.toString:  " , my_array.toString());

my_array.sort();                       //sorts as strings not numerically - DEFAULT
console.log(my_array.toString());

my_array.sort(function (a,b) {			//NUMERIC SORTING - using COMPARATOR FUNCTION - compare two elements in array
	return a-b;							//pass two values a and b.  return -/+ ordres the values
});                       				//sorts NUMERICALLY

console.log(my_array.toString());

//RANDOM sorted values

var my_array = [10, 44, 32, 100, 0, 44, 3, 4];

my_array.sort(function(a,b) {
	return Math.random() - 0.5;    	//notice not using a or b at all    ARRAY RANDOMIZER
});

console.log(my_array.toString());

//REVERSE

var my_array = [1,2,3,4,5];
console.log (my_array.toString());

my_array.reverse();         //.reverse METHOD
console.log (my_array.toString());

//METHODS  Part 3:        do not change values in array - return new array or some other values - SAFE METHODS

//Join two arrays together  - CONCATENATE

var x = [1,2,3];
var y = [4,5,6];

var z = x.concat(y)     //create a new array with x and y  - pass array as argument of concat
console.log (x.toString());
console.log (y.toString());
console.log ("CONCAT x and y:  ", z.toString());

var x = [1,2,3];
var y = [4,5,6];

var z = x.concat(4,5,6,7,8,9, [10,11,12])     //create a new array with x and y  - pass array as argument of concat
console.log (x.toString());
console.log (y.toString());
console.log (z.toString());

//SLICE  Method    - pull out slice of array  - start index to end index

var my_array = [0,1,2,3,4,5];
var result = my_array.slice(1,4);     //pass start and end index

console.log (result.toString());

//JOIN Method

var word = ["these", "are", "some", "words", true, 123.4];
var result = word.join('-');					     //Join together with whatever we pass to .join

console.log ("XXX  word.toString:  ", word.toString());
console.log ("XXX result.toString::  ", result.toString());

//SPLICE Method - very powerful - advanced manipulation


console.log(" --- ")
var my_array = [0,1,2,3,4,5,6];

//DELETE
console.log (my_array.toString());
delete my_array[2];
console.log (my_array.toString());    //DELETE removed index 2 which is now undefined

//SPLICE  SPLICE  SPLICE  SPLICE  --  optionally add and remove elements

my_array.splice(2, 1);     //start at index two and remove 1 element from array
console.log ("SPLICE:  ", my_array.toString());

var my_arrayx = [0,1,2,3,4,5,6];
my_arrayx.splice(2, 2);     //start at index two and remove 2 elements from array
console.log (my_arrayx.toString());

//ADDING TO ARRAY WITH SPLICE - next two arguements

var my_arrayy = [0,1,2,3,4,5,6];

my_arrayy.splice(2, 1);     //start at index two and remove 1 element from array
console.log (my_arrayy.toString());

my_arrayy.splice(2, 0, 'two');     //start at index two and remove 0 element from array and add element
console.log (my_arrayy.toString());

//Replace one index element

var my_arrayz = [0,1,2,3,4,5,6];

my_arrayz.splice(2, 1, 'two', 'TWO', 'shit');     //start at index two and remove 1 element from array
console.log (my_arrayz.toString());

//SAME AS:

my_arrayz[2] = 2;
console.log (my_arrayz.toString());