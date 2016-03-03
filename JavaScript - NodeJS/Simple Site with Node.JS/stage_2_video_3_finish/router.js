var Profile = require("./profile.js");                            //  Profile -  Constructor function

//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {                                //  Home ROUTE  --  home FUNCTION
  //if url == "/" && GET
  if(request.url === "/") {
    //show search
    response.writeHead(200, {'Content-Type': 'text/plain'});  
    response.write("Header\n");
    response.write("Search\n");
    response.end('Footer\n');
  }
  //if url == "/" && POST
    //redirect to /:username
}

//Handle HTTP route GET /:username i.e. /chalkers
function user(request, response) {                                //  User ROUTE  --  user FUNCTION
  //if url == "/...."
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});  
    response.write("Header\n");
    
    //  Get json from Treehouse --  Profile is CONSTRUCTOR FUNCTION -- Will return JSON from TreeHouse and return it
    var studentProfile = new Profile(username);             //  created NEW OBJECT with 'username' >>  studentProfile  JSON

    // On end:  When the JSON body is fully received the the "end" event is triggered and the full body is given to the handler or callback
    //  JSON Object passed into the CallBack FUNCTION:
    studentProfile.on("end", function(profileJSON){         //  CallBack Function:  PASS in the returned JSON:  profileJSON
      //show profile
      
      //Store the values which we need in the 'values' OBJECT:    (key: value pairs,)
      var values = {                                        //  Store VALUES in OBJECT called VALUES:
        avatarUrl: profileJSON.gravatar_url,                //  gravatar
        username: profileJSON.profile_name,                 //  profile_name
        badges: profileJSON.badges.length,                  //  badges.length
        javascriptPoints: profileJSON.points.JavaScript     //  points.JavaScript
      };

      //Simple response
      response.write("The response is: \n");
      response.write(values.username + " has " + values.badges + " badges\n");
      response.write("gravatar URL: " + values.avatarUrl + "\n");
      response.write("<img src= '" + values.avatarUrl + "'> \n" );
      response.end('Footer\n');
    });
        
    //on "error"
    studentProfile.on("error", function(error){     // On error PASS the 'error' OBJECT
      //show error
      response.write(error.message + "\n");
      response.end('Footer\n');
    });
      
  }
}

//EXPORT:  Make functions accessible by other files:                EXPORT MODULES:  EXPORT FUNCTIONS

module.exports.home = home;
module.exports.user = user;












