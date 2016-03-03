//Problem: We need a simple way to look at a user's badge count and JavaScript points
//Solution: Use Node.js to connect to Treehouse's API to get profile information to print out


var httpObject = require("http");     //  API:  MAKE API AVAILABLE:  with REQUIRE FUNCTION  --  http OBJECT
var username = "danielniclas";


//  Custom Function #1 - Print out Response
function printMessage(username, badgeCount, points) {
  var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
  console.log(" ");
  console.log(message);
}

//  Custom Function #2 - Print out Error Messages
function printError(error){

    console.error("XXX Error Message:  " + error.message);      //  Event has an error OBJECT passed to it.
                                                                //  error() METHOD sometimes shows in a different color
}


//Connect to the API URL (http://teamtreehouse.com/username.json)               --  THIS IS NOT A WEB SERVER - JUST CONNECTING WITH URL -- WEB REQUEST
var request = httpObject.get("http://teamtreehouse.com/" + username + ".json",  // OBJECT.get(options, [callback])
                                                                                // Nodejs.org/API > Docs > http > http.get(options, [callback])

    function(response) {              //  CALLBACK FUNCTION  --  PASS:  response

      // console.dir(response);          //  response is HUGE!
      console.log("XXX Status Code:  " + response.statusCode);    //  StatusCode of 200 means we can connect to the URL

  //Read the data

      var body = "";                          //  To collect and CONCATENATE chunks as they come in
      response.on('data', function(chunk){    //  EVENT:  'data'  , CALLBACK FUNCTION PASS: chunk
                                              //  {BODY} is a stream of data over the network in several CHUNKS
                                              //  Node.JS uses STREAMS to implement its NON-BLOCKING FEATURES !!!!!
                                              //  Application is free to do other things while waiting for more data to be transferred


        //  EVENT:  'data' when the data comes in
        //  EVENT:  'end' when it's completed getting the data

        body += chunk;
        });

        response.on('end', function(){

            if(response.statusCode === 200) {


                try {
                    console.log("XXX Body:  " + body);   //  'chunk'  Returns:  {BODY} OBJECTs with all JSON content - several PACKETS
                    console.log("XXX TypeOf: " + typeof body);   //  Body is a string at this point

                    //  Need to convert STRING to OBJECT
                    //  Process of converting STRING to DATA STRUCTURE is called PARSING
                    //  Parsing is not a HOST OBJECT in the node.js ENVIRONMENT - it is a NATIVE OBJECT  >>  MDN   JSON.parse()

                    var profile = JSON.parse(body);
                    console.dir(profile);

                    printMessage(username, profile.badges.length, profile.points.JavaScript);

                } catch (error) {  //  End TRY block  -- if error throw 'error' OBJECT
                    // PARSE ERROR:
                    printError(error);
                }
            } else {
                // Any STATUS CODE other than 200
                // STATUS CODE ERROR:   --  Node.js API http:  STATUS.CODES:
                //  Passing in out own OBJECT instead of an 'error' OBJECT:
                printError({message: "XXX There was an error getting the profile for " + username + ". (" +
                "http.STATUS.CODE: " + httpObject.STATUS_CODES[response.statusCode] + ") "});
            }
        });


  //Parse the data
  //Print the data

});

//  CONNECTION ERROR:  --  (PARSE ERROR above)
                                        //  'request' is the FUNCTION (above)  --  WEB REQUEST FUNCTION
request.on("error",printError);         //  Error Handler implemented on REQUEST -- "error" ERROR EVENT, CallBack
                                        //  CallBack FUNCTION:  printError (Above)













