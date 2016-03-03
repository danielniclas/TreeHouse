var Profile = require("./profile.js");
var renderer = require("./renderer.js");
var querystring = require("querystring");     //  Node Module -- Require

var commonHeaders = {'Content-Type': 'text/html'};    //  Content Type {OBJECT} -- Sent by the SERVER:  text/html
                                                      //  Google:  Internet Medial Type: Type text -- 'Content Type'

//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {                      //  REQUEST    RESPONSE
  //if url == "/" && GET
  if(request.url === "/") {
    if(request.method.toLowerCase() === "get") {        //  to find out the HTTP method of a request
      //show search
      response.writeHead(200, commonHeaders);
      // This used to be:  response.writeHead(200, {'Content-Type': 'text/plain'});    OBJECT {'Content-Type': 'text/plain'}

      renderer.view("header", {}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    } else {
      //if url == "/" && POST
      
      //get the post data from body
      request.on("data", function(postBody) {
        //extract the username
        var query = querystring.parse(postBody.toString());   //  Node MODULE to parse a query string or the body of a POST request
        response.writeHead(303, {"Location": "/" + query.username});        //  REDIRECT to USERNAME PAGE!
                                                                            //  Status Code 303 to go to another location:  See Other
                                                                            //  on same domain, not redirecting to another Web site - so /username is good enough
        response.end();
        //redirect to /:username
      });
      
    }
  }
  
}

//Handle HTTP route GET /:username i.e. /chalkers
function user(request, response) {
  //if url == "/...."
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.writeHead(200, commonHeaders);  
    renderer.view("header", {}, response);    
    
    //get json from Treehouse
    var studentProfile = new Profile(username);
    //on "end"
    studentProfile.on("end", function(profileJSON){
      //show profile
      
      //Store the values which we need
      var values = {
        avatarUrl: profileJSON.gravatar_url, 
        username: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      };
      //Simple response
      renderer.view("profile", values, response);     //  passing values --  OBJECT
      renderer.view("footer", {}, response);          //  {}  Empty OBJECT
      response.end();
    });
        
    //on "error"
    studentProfile.on("error", function(error){
      //show error
      renderer.view("error", {errorMessage: error.message}, response);
      renderer.view("search", {}, response);
      renderer.view("footer", {}, response);
      response.end();
    });
      
  }
}

module.exports.home = home;
module.exports.user = user;












