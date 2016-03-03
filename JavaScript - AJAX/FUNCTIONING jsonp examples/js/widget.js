
//  AJAX
//  To inject new html into a Web page
//  To receive JSON data from a Web server
//  To post form data to a database

// How AJAX works:
//  1.  Create an XMLHTTP Request object
//  2.  Create a callback function
//  3.  Open a request
//  4.  Send the request



//$.get(url, data, callback);    url making request too.

// var url = '/employees.php';    php script in ROOT directory of Web server
//                                php script that retrieves info about employees


//      data:                    data argument is optional -- data you send to web server -- added to URL as query string
//                               JS object can be provided as data argument
//                               jQuery will format it into a query string
//            var data = {
//                  firstName: "Dave",
//                  lastName: "McFarland"
//              };

//  Callback function -- don't need to check for ready STATUS or errors
//  var callback = function(response) {        };
//  jQuery hands the callback function the data it receives from the server
//
//  (response) argument is the same as .responseText property

//  *************************************************************************

//  getJSON(url, data, callback) function
//  Pass three arguments
//  URL -- points to a Web resource -- like a static JSON file or a server side program that returns JSON data
//  Optional data argument -- to send info to Web server
//  Callback function --



//$(document).ready(function () {                    //  WAITS FOR ALL HTML TO LOAD INTO BROWSER before running any JS


    function jsonpcallback (data) {

        var statusHTML = '<ul class="bulleted">';     //  variable to hold the html that the callback generates

        $.each(data,function (index, object) {
            if (object.inoffice === true) {
                statusHTML +='<li class="in">';
            } else {
                statusHTML +='<li class="out">';
            }
            statusHTML += object.name + '</li>';
        });
        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML)
    };



  //var url = "../data/employees.json";
  //var url = "data/employees.json";

    var url = "http://philz.danielniclas.com/data/employees.js?callback=jsonpcallback";
  //var url = "http://philz.danielniclas.com/data/text.json?jsonCallback=?";

  //  As with the get function, the callback for the getJSON is passed the response returned from the server
  // Remember this function only handles JSON data
  // So, before passing the response from the server to the callback, jQuery parses the response into a usable JS array or object
  // if the server responds with anything but JSON, like plain text, html, or XML the entire getJSON function fails

//  Callback has the RESPONSE variable -- RESPONSE is the employees.json file converted to javascript
 // the RESPONSE variable holds an array of objects

//  jQuery provides its own utility for looping through arrays   $.each()
//  $.each() function (utility method) --  loops through an array of items -- same as a JS for loop
//  $.each(array_or_object, callback)   callback = (index, value)


  //$.getJSON(url, jsoncallback);


(function($) {


    $.ajax({

        type: 'GET',
        url: url,
        async: false,
        jsonp: 'jsonpcallback',
        contentType: "application/json",
        dataType: 'jsonp',

//data: {
//    id:123
//},

        success: function(data) {
            console.log("success:", data);

        },
        error: function(e) {

            console.log("ERROR", e);
            console.log("ERROR: ", e.status);
            console.log("ERROR: ", e.statusText);
        }
    });

})(jQuery);

//});   // end ready