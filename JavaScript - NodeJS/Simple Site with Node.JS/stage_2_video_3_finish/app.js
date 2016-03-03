var router = require("./router.js");
//Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP

//Create a web server
var http = require('http');
http.createServer(function (request, response) {

  router.home(request, response);                   //  Home ROUTE -- for http SERVER
  router.user(request, response);                   //  User ROUTE -- for http SERVER

}).listen(3000);
console.log('Server running at http://<workspace-url>/');


//Function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values in to string











