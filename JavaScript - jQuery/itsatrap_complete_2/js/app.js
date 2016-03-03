//Hide Warning
//Show Warning Slowly

//$(".warning").hide().show("slow");

var myCode = function () {
    $(".warning").hide().show("slow");
}

//Function:
//myCode();

//From Document Loading Events - jQuery Library - .ready()
//Want to run when document is ready.  All elements logged into the DOM
//  .ready() -- Description: Specify a function to execute when the DOM is fully loaded.

//handler:
//Type: Function()
////A function to execute after the DOM is ready.

$(document).ready(myCode);    //$( document ).ready( handler )  --  PASS FUNCTION HERE

//HANDLER will run when page is READY


// ANONYMOUS FUNCTION:   (SAME)

$(document).ready(function() {
    $(".warning").hide().show("slow");
});

// PASS HANDLER INTO jQuery METHOD:   (SAME)

$(function() {
    $(".warning").hide().show("slow");
});


