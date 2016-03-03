/**
 * Created by Daniel on 3/17/2015.
 */


var http = require("http");

var print = require("./print.js");


//  PRINT FUNCTIONS:


//
////  Function:  Print out message:
//function printMessage(username, badgeCount, points) {
//    var message = "ARG GETTER: " + username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
//    console.log(message);
//    console.log(' ');
//}
//
//printMessage("XXX  Function TEST XXX:", 100, 700);
//
//
//
////  Function:  Print out ERROR messages - with PASSED error OBJECT:
//function printError(e) {
//    console.error("ERROR ERROR ERROR:  " + e.message);
//}



//  END:  PRINT FUNCTIONS




//  MAIN FUNCTION:  get() METHOD -- Connects with remote JSON and READS DATA for PARSING:
function getProfile(username) {

    //  Connect to the API URL (http://teamtreehouse.com/username.json) -- every user has a JSON file
    //  CALL BACK FUNCTION in get() METHOD - takes 'response' argument {OBJECT}

    var request = http.get("http://teamtreehouse.com/" + username + ".json", function (response) {
        console.log("Response Code:  " + response.statusCode);
        console.log(' ');
        //console.dir(response);


        var body = "";


        //DATA  -- .on() EVENT HANDLER with CALL BACK  -- takes 'chunk' argument  {OBJECT}

        response.on('data', function (chunk) {

            // returns a bunch of Body chunks
            //console.log('XXX Body:' + chunk);

            //add chunks as they arrive:
            body += chunk;    //  Many 'chunk' arrive in packets

        });

        //END  -- .on() EVENT HANDLER with CALL BACK  -- takes no argument

        //when RESPONSE END arrives:
        response.on('end', function () {

            //console.log('XXX Body:' + body);
            //console.log('XXX typeof: ' + typeof body);

            //  PARSE:  Convert STRING into a DATA STRUCTURE (OBJECT) - PARSING
            //  JSON.parse()  --   Pass in a STRING and parsed into a JSON OBJECT
            //body is a STRING and NOT AN OBJECT
            //TO ACCESS THE CONTENTS OF THE JSON FILE:

            if (response.statusCode === 200) {    //  200 is SUCCESS

                try {   // what if the server does not send JSON?   have to CATCH this error
                    var profile = JSON.parse(body);
                    //console.dir(profile);
                    console.log("CSS Value:  " + profile.points.CSS);
                    console.log("Badges Array: " + profile.badges.length);

                    print.printMessage(username, profile.badges.length, profile.points.JavaScript);
                } catch (e) {     //  throws error OBJECT (e)
                    // PARSE ERROR:
                    print.printError(e);
                }
            } else {
                // Status Code Errors -  PASSING IN OUR OWN OBJECT:  property MESSAGE:
                    print.printError({message: "There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"});
            }

        });

    });



    //ERROR HANDLING

    //code executed when error emitted by the system:
    //this callback has an error even passed to it (e):


    // CONNECTION ERROR:
    request.on('error', print.printError);

    //Connection Error:
    //PARSE Error:
    //STATUS CODE Error:

}
//  EXPORT THIS MODULE:
//  MUST identify which method of the MODULE to EXPORT

module.exports.getX2 = getProfile;
