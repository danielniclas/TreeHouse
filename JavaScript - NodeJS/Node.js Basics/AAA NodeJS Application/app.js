//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

//  NODE.JS - NON-BLOCKING   --  Data streaming and deal with when it can -- faster than other solutions
//  http request cycle -- whichever finishes first  (other languages would wait in the que)


//    Requiring your own files
//  ./ means same directory as app.js file -- THIS IS MANDATORY

var profile = require("./profile.js");
var profile2 = require("./profile2.js");

//  Syntax 1:
var username = "danielniclas";
profile.getX(username);           //  getX is the given name to the 'getProfile' FUNCTION (from profile.js)

//  Syntax 2 - shorthand:
profile.getX("chalkers");

//  Syntax 3 - with [ARRAY]:
var users = ["chalkers", "joykesten2", "davemcfarland", "nickpettit", "danielniclas"];

//  Iterate over an [ARRAY] with:     forEach() METHOD    --  v8 engine supported
//  Passes each member of the [ARRAY] into the CALL BACK FUNCTION
//  CALL BACK FUNCTION receives each member into the parameter:  given name:  arrayMember

users.forEach(function(arrayMember){
profile.getX(arrayMember);             //  getX is the given name to the 'getProfile' FUNCTION (from profile.js)
});

// Syntax -- shorthand:
//users.forEach(profile.getX);


//  ENTER ARGUMENTS in the CLI:    Use slice to pick the correct properties from [argv]

//  NODE.JS Global Object:  process
//  process.argv  [ARRAY]
console.dir(process.argv);

var argUsers = process.argv.slice(2);

argUsers.forEach(function(arrayMember){
    profile2.getX2(arrayMember);      //  getX2 is the given name to the 'getProfile' FUNCTION (from profile2.js)
});



