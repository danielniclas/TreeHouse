var Profile = require("./profile.js");


var studentProfile = new Profile("danielniclas");

/**
* When the JSON body is fully recieved the 
* the "end" event is triggered and the full body
* is given to the handler or callback
**/
studentProfile.on("end", console.dir);      // 'end' EVENT is triggered -->  JSON body is returned to CALL BACK
                                            //  console.dir METHOD  -- Print out to Console
/**
* If a parsing, network or HTTP error occurs an
* error object is passed in to the handler or callback
**/
studentProfile.on("error", console.error);