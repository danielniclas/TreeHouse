
// Node.js APIs:

var EventEmitter = require("events").EventEmitter;
var http = require("http");
var util = require("util");

/**
 * An EventEmitter to get a Treehouse students profile.
 * @param username
 * @constructor
 */
function Profile(username) {                //  Constructor function ??

    EventEmitter.call(this);

    profileEmitter = this;

    //Connect to the API URL (http://teamtreehouse.com/username.json)
    var request = http.get("http://teamtreehouse.com/" + username + ".json", function(response) {
        var body = "";

        if (response.statusCode !== 200) {
            request.abort();
            //Status Code Error
            // ERROR:  Any STATUS CODE other than 200
            profileEmitter.emit("error", new Error("There was an error getting the profile for " + username + ". (" + http.STATUS_CODES[response.statusCode] + ")"));
        }

        //Read the data
        response.on('data', function (chunk) {          //  EVENT:  'data' when the data comes in
            body += chunk;
            profileEmitter.emit("data", chunk);
        });

        response.on('end', function () {                //  EVENT:  'end' when it's completed getting the data
            if(response.statusCode === 200) {
                try {
                    //Parse the data
                    var profile = JSON.parse(body);         //  PARSE:  Convert STRING to OBJECT and store in "profile" variable
                    profileEmitter.emit("end", profile);    //  emit 'profile'
                } catch (error) {
                    profileEmitter.emit("error", error);    //  Parse ERROR
                }
            }
        }).on("error", function(error){                 //  EVENT:  'error' when there is an error
            profileEmitter.emit("error", error);
        });
    });
}

util.inherits( Profile, EventEmitter );

//  EXPORT THE ROUTER FUNCTIONS:
module.exports = Profile;