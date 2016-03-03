

// Strings are OBJECTS that have properties

var element = '<p>';
var endElement = '</p>';

var noun = prompt("Please enter a noun");
var verb = prompt("Please enter a verb");
var adjective = prompt("Please enter an adjective");
var stringToShout = prompt("What should I shout?");
var shout = stringToShout.toUpperCase();
shout += "!!!";

element += "There once was man from Nantucket.  His ";
element += noun;
element += " was so ";
element += adjective;
element += " you could ";
element += verb;
element += " it!!";
element += " ";
element += shout;
element += endElement;




document.write(element);




var passphrase = "passphrase";
document.write('<p>Length of passphrase variable: ' + passphrase.length + '</p>');




//alert(shout);