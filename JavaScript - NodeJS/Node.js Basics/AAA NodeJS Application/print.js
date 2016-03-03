/**
 * Created by Daniel on 3/17/2015.
 */






//  PRINT FUNCTIONS:

//  Function:  Print out message:
function printMessage(username, badgeCount, points) {
    var message = "ARG GETTER: " + username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
    console.log(message);
    console.log(' ');
}

printMessage("XXX  Function TEST XXX:", 100, 700);



//  Function:  Print out ERROR messages - with PASSED error OBJECT:
function printError(e) {
    console.error("ERROR ERROR ERROR:  " + e.message);
}

//  END:  PRINT FUNCTIONS




//  EXPORT THIS MODULE:
//  MUST identify which method of the MODULE to EXPORT

module.exports.printMessage = printMessage;      //  EXPORTING function on RIGHT via name on LEFT

module.exports.printError = printError;          //  EXPORTING function on RIGHT via name on LEFT