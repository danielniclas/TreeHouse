

// ****************************************************

// jQuery is a piece of SW called the Java Script Library
// jQuery is a collection of JS code
// jQuery is Java Script

// ****************************************************


//Hide Warning
//Show Warning Slowly


//$(".warning").hide().show("slow");

//Pass in the CSS selector of the elements you want to manipulate or add behavior to
// Select everything with the 'warning' class -- jQuery method takes in a string of that selector
//jQuery returns the jQuery representation of those matched elements

// jQuery() -- Like a FUNCTION -- Pass in the CSS Selector to manipulate
// jQuery function RETURNS the jQuery representation of those MATCHED ELEMENTS
// ....so can call additional Methods

    jQuery(".warning").hide();          // (CSS Selector):  (".warning") class
    jQuery(".warning").show("slow");    // (CSS Selector):  (".warning") class

// Shorthand:  -- $ to replace jQuery:

//  $(".warning").hide();
//  $(".warning").hide().show("slow");

//  METHOD CHAINING:

//  $(".warning").hide().show("slow");
