//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out
var https = require("https");
//var username = "chalkers";


function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(message);
}

//Connect to the API URL (http://teamtreehouse.com/username.json)

function getUser(username){

  console.log("getUser Function entered -- Username:  ", username);

  var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){  //  get(1,2)   1. URL, 2.  CB
    var body = "";
    //Read the data
    response.on('data', function (chunk) {
      body += chunk;
    });
    response.on('end', function(){
      var profile = JSON.parse(body);
      printMessage(username, profile.badges.length, profile.points.JavaScript)
    });
    //Parse the data
    //Print the data
  });

  request.on("error", function(error){
    console.error("XXX ERROR XXX ", error.message);
  });

}

getUser("chalkers");                                                    //  asynch
getUser("danielniclas");                                                //  asynch
setTimeout(function(){ console.log("setTimeout function"); }, 3000);    //  asynch
console.log("asynch#1");                                                //  synch
console.log("asynch#2");
console.log("asynch#3");
console.log("asynch#4");
console.log("asynch#5");
console.log("asynch#6");
console.log("asynch#7");
console.log("asynch#8");
console.log("asynch#9");
console.log("asynch#10");










