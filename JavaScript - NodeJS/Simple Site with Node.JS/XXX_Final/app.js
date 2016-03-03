//Problem: We need a simple way to look at a user's badge count and JavaScript point from a web browser
//Solution: Use Node.js to perform the profile look ups and server our template via HTTP



var routerObject = require("./router.js");        //      ROUTER OBJECTS (MODULES) -- home  and  user

//  App Built with Node.JS APIs

//  Create a web server:

var http = require('http');

http.createServer(function (request, response) {        //  CREATE WEB SERVER with CALL BACK (Handler) - pass 'request' (from browser) and 'response' (to browser)
                                                        //  Event: 'request':  An instance of http.IncomingMessage  (OBJECT created by http Server)
                                                        //  Event: 'response':  An instance of http.ServerResponse

    routerObject.homeFunction(request, response);
    routerObject.userFunction(request, response);

}).listen(3000, '127.0.0.1');                           // Listen on port 3000, IP address (local machine)

console.log('XXX Server running at http://127.0.0.1:3000/');



/*
 How websites operate.
 Start with the web browser.
 A web browser is an application that is used to download and render HTML and CSS and execute any client site JavaScript.
 You type in a website address into a browser's address bar and hit enter, and it sends a request for information to a server or
 A computer on the internet that has that domain name assigned to it.
 Part of the information that the server receives in theREQUEST is the address or the URL that the client has entered.
 A URL will have a path to a file like index.html.
 The software running on the server like Apache or NGINX, will be configured to look for a certain directory on the server and look for the file, and in turn reads its contents and sends it back to the browser.
 The way the browsers and the web server agree to communicate is called a Protocol.
 The Protocol that the browser and web servers use is Hypertext Transfer Protocol or HTTP.
 You can refer to the software on the server as an HTTP Server and the browser as an HTTP Client.
 Now, what happens when you want a dynamic site, for example, if I wanted a PHP script to run on my server?
 The HTTP Server would need to use a PHP Interpreter to run the code to generate dynamic content on the page and send it.
 So the question is, how does Node.js fit in?
 Well, with Node.js you can actually create your own HTTP server programmatically.
 Handling URLs, and requests, and responding however you want.
 You can serve static files or generate dynamic content.
 Creating an HTTP server, serving files, and generating dynamic content all in Node.js.
 */


