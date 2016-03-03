var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");

var commonHeaders = {'Content-Type': 'text/html'};    //  Sending Content Type Headers with Node.js.  Wikipedia:  internet media types

//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {                    // *** HOME ROUTE ***  *** HOME ROUTE ***  *** HOME ROUTE ***
  //if url == "/" && GET
  if(request.url === "/") {                           //  Web Server: 'request' - URL entered at browser. Incoming message with PROPERTIES and METHODS
    if(request.method.toLowerCase() === "get") {      //  If the response is "GET"  show Search  (QUERY STRING in the URL   /?username=danielniclas )
      //show search
      response.writeHead(200, commonHeaders);         //  Web Server:  'response' - SENDING A RESPONSE! (not receiving one)

      //  response.write("Header\n");  >> replace with renderer.view()
      //  response.write("Search\n");  >> replace with renderer.view()
      //  response.end("Footer\n");   >> replace with renderer.view()

      renderer.viewFunction("header", {}, response);
      renderer.viewFunction("search", {}, response);
      renderer.viewFunction("footer", {}, response);
      response.end();                                 //  Until END is reached the node.js keeps the connection open - when end METHOD called no additional data

    } else {              // if anything else, like POST  --  SEARCH:  <form action="/" method="POST">

      //if url == "/" && POST
      //get the post data from body                               //  pull data from body of the request
      request.on("data", function(postBody) {                     // readable stream has a 'data' event
        //extract the username
        console.log(postBody);
        console.log("XXX PostBody:  " + postBody);
        var query = querystring.parse(postBody.toString());            //  Extract the USERNAME    --  notice require QUERY STRING ABOVE
        // response.write(query.username);                             //  query.username >> USERNAME
        response.writeHead(303, {"Location":  "/" + query.username }); //  REDIRECT -- 303 see another location  -- Header Fields > Location:  URL

        response.end();                                                //  MUST HAVE:  .end() in EVERY CALLBACK
      });
    }
  }
}

//  HTTP Status Codes:
//  300  multiple choices
//  301  moved permanently
//  302  found
//  303  see other (forces a GET request to the new URL even if original request was a POST)
//  307  temporary redirect


//  Handle HTTP route GET /:username
function user(request, response) {                  // *** USER ROUTE ***  *** USER ROUTE ***  *** USER ROUTE ***
                                                    //  if url == "/...."  If the URL contains "/username"
  var username = request.url.replace("/", "");      //  Replace '/' with empty string
  if(username.length > 0) {                         //  Does username exist. Is it > 0?

    response.writeHead(200, commonHeaders);

    //  response.write("Header\n");  >> replace with renderer.view()
    //  response.write(username + "\n");  >> replace with renderer.view()
    //  response.end("Footer\n");   >> replace with renderer.view()

    renderer.viewFunction("header", {}, response);
    
                                                            //  Get JSON from Treehouse
    var studentProfile = new Profile(username);             //  CREATE STUDENT Profile OBJECT
    studentProfile.on("end", function(profileJSON){         //  When 'studentProfile' created  .on("end" , callback) >>  Show Profile
                                                            //  When the JSON body is fully received the 'end' EVENT is triggered and full body
                                                            //  is given to the handler or callback

      //Store the values which we need from the JSON body - profileJSON  > in {OBJECT}
      var values = {
        avatarUrl: profileJSON.gravatar_url, 
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,                //  badges is an ARRAY so can all .length METHOD on it
        javascriptPoints: profileJSON.points.JavaScript
      };

      renderer.viewFunction("profile", values, response);
      renderer.viewFunction("footer", {}, response);
      response.end();                                     //  .end()
    });
        
    //on "error"
    studentProfile.on("error", function(error){                         //  .on('ERROR', error handler)
      //show error
      renderer.viewFunction("error", {errorMessage: error.message}, response);
      renderer.viewFunction("search", {}, response);
      renderer.viewFunction("footer", {}, response);
      response.end();                                     //  .end()
    });
      
  }
}

//  EXPORT THE ROUTER FUNCTIONS:
module.exports.homeFunction = home;
module.exports.userFunction = user;












