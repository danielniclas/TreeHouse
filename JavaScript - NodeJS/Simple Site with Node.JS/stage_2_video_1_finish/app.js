//Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

//1. Create a web server

var http = require('http');

http.createServer(function (request, response) {

  homeRoute(request, response);         //  homeRoute HANDLER  -- function defined BELOW
  userRoute(request, response);         //  userRoute HANDLER

  }).listen(3000);

//  createServer ^^^^

console.log('Server running at http://<workspace-url>/');

//2. Handle HTTP route GET / and POST / i.e. Home
function homeRoute(request, response) {
  //if url == "/" && GET
  if(request.url === "/") {               // url PROPERTY of request OBJECT  --  Preparing the HOME ROUTE  /
    //show search
    response.writeHead(200, {'Content-Type': 'text/plain'});    //  Write to the Reponse
    response.write("Header\n");                                 // Header Tag  --  Placeholders
    response.write("Search\n");
    response.write("request OBJECT: " + request + "\n");
    response.write("response OBJECT: " + response + "\n");
    response.write("request.url: " + request.url + "\n");
    response.end('Footer\n');                                   //  Footer - End of Body
  }
  //if url == "/" && POST
    //redirect to /:username
}

//3. Handle HTTP route GET /:username i.e. /chalkers
  //if url == "/...."
    //get json from Treehouse
      //on "end"
        //show profile
      //on "error"
        //show error

function userRoute(request, response) {             //  User would be slash and then the username
                                                    //  want to remove the first slash and that would be username ??
  var username = request.url.replace("/", "");      //  replace '/' with the empty string
  if(username.length > 0) {

    console.log("In userRoute function!");

    response.writeHead(200, {'Content-Type': 'text/plain'});    //  Write to the Reponse
    response.write("Header\n");                                 // Header Tag  --  Placeholders
    response.write("username: "+ username + "\n");
    response.write("request.url: " + request.url + "\n");
    response.end('Footer\n');

  }

}




//4. Function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values in to string