/**
 * Created by Daniel on 2/26/2015.
 */


$(document).ready(function(){





    $( "#btn" ).click(function() {
       console.log("Click Pressed");

        var x = $('#lion1');
        x.css('fill','green');

    });

    $( "#btn1" ).click(function() {
        console.log("Click Pressed");

        var x = $('#lion1');
        x.css('fill','red');

    });

    $( "#btn2" ).click(function() {
        console.log("Click Pressed");

        var x = $('#lion2');
        x.show();

    });


    $( "#btn3" ).click(function() {
        console.log("Click Pressed");

        var x = $('#lion2');
        x.hide();

    });



    $( "#btn4" ).click(function() {

        for (var i = 0; i < 20; i+=1) {

            $("#lion1").slideUp(300).delay(800).fadeIn(400);
            $("#lion2").slideUp(1200).fadeIn(2400);
        }
    });




});