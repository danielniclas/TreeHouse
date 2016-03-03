/**
 * Created by Daniel on 2/15/2016.
 */
//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var https = require("https");
var username = "chalkers";


//  FUNCTION TO PRINT RESPONSE DATA:
function printMessage(username, badgeCount, points) {
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
    console.log(message);
}

//Connect to the API URL (http://teamtreehouse.com/username.json)

function getUser(username) {
    var request = https.get("https://teamtreehouse.com/" + username + ".json", function (response) {
        var body = "";
        //Read the data
        response.on('data', function (chunk) {
            body += chunk;
        });
        response.on('end', function () {
            var profile = JSON.parse(body);
            printMessage(username, profile.badges.length, profile.points.JavaScript)
        });
        //Parse the data
        //Print the data
    });

    request.on("error", function (error) {
        console.error(error.message);
    });
}

getUser('danielniclas');
getUser('chalkers');
console.log("This is console.log() #1");
console.log("This is console.log() #2");
console.log("This is console.log() #3");
console.log("This is console.log() #4");
console.log("This is console.log() #5");
console.log("Example of Single Thread and Multiple Code Paths");





