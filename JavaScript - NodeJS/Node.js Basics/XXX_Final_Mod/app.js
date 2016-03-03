//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out


var profile = require("./profile.js");        //  Require the profile.js file
                                              //  Path:  ./ means current directory  -- same directory as app.js file

//  var username = "danielniclas";

// profile.getModule("danielniclas");               //  MODULES
                                                    //  getModule() FUNCTION is EXPOSED from profile.js
                                                    //  module.exports.getModule = get;



var users = ["chalkers", "davemcfarland", "danielniclas"];
users.forEach(function(username)                     //  ITERATE over ARRAY with forEACH METHOD
{                                                    //  Passes each member of the array into the call back function

        profile.getModule(username);

});


