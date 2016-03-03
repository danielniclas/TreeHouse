//Handle HTTP route GET / and POST / i.e. Home
function home(request, response) {
  //if url == "/" && GET
  if(request.url === "/") {                                 //  Node.js API:  request.url
    //show search
    response.writeHead(200, {'Content-Type': 'text/plain'});    //  response.writeHead(statusCode[, statusMessage][, headers])

    response.write("Header\n");
    response.write("Search\n");

    response.end('Footer\n');
  }
  //if url == "/" && POST
    //redirect to /:username
}

//Handle HTTP route GET /:username i.e. /chalkers
function user(request, response) {
  //if url == "/...."
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.writeHead(200, {'Content-Type': 'text/plain'});  //  response.writeHead(statusCode[, statusMessage][, headers])
    response.write("Header\n");                               //  Node.js API:  response.write
    response.write("User Name:  " + username + "\n");
    response.end('Footer\n');
    
    
    //get json from Treehouse
      //on "end"
        //show profile
      //on "error"
        //show error
  }
}

module.exports.home = home;       //  Node.js API:  EXPORT the ROUTES  Create FUNCTIONS for access:  router.home
module.exports.user = user;       //  Node.js API:  EXPORT the ROUTES  Create FUNCTIONS for access:  router.user


//  Node.js APIs used:
//  require
//  module.exports
//  response.write
//  request.url










