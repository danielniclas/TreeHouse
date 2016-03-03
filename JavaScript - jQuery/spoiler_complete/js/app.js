
//Problem:  Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//THREE MAJOR AREAS OF THE jQUERY API:
//1.  Manipulation:  Hiding, Showing, Appending and Removing
//2.  Event Handling:  Click handler to trigger code
//3.  Traversal:  Moving from button you click to the spoiler span underneath

//  jQuery METHODS:  *****************

//    .hide()
//    .show()
//    .append()
//    .click()
//    .prev()
//    .remove()

//  jQuery METHODS:  *****************

//1.  Hide spoiler span:

        $(".spoiler span").hide();              //class: .spoiler + element: span + .hide()

//2.  Add a button to .spoiler element

        $(".spoiler").append("<button>Dork Button!</button>");       //.append() a button <button>
                                                  // appending button right on top of spoiler span

//3.  When button pressed:

    //Event Handler
    //Type: Function( Event eventObject )
    //FUNCTION to execute each time the event is triggered.  ***********************

        $("button").click(function(){               // = unnamed function

  //3.1, Show spoiler next to the button clicked  (INSIDE THE FUNCTION)

        //$(".spoiler span").show();    //Selects all spans to show
        // .spoiler is parent of both Button elements
        //better if we could select the span that is under the button -- 'this' Button

        $(this).prev().show();       // 'this' is referring to the Button -- Clicking on THIS Button
                                     // 'this' Object is the Button being clicked
                                     // select Previous element from the Button
                                     // Traversing the DOM
                                     // move from element to previous element
                                     // .prev()  -- get the immediately preceding sibling elements
                                     // Immediately Preceding element is SPOILER SPAN

        //3.2, Make button disappear after you click on it  -- make button disappear

        $(this).remove();             // Still inside the FUNCTION
});
