/**
 * Created by Daniel on 11/30/2015.
 */



angular.module("todoListApp")
    .directive('helloWorld', function(){         //  Name of Directive is camelCase


        return{
            template: "This is the hello world directive!",
            restrict:  'E'      //  Restrict Option - restrict how option is used
                                //  'E' restrict as ELEMENT only
                                //  'A' restrict as ATTRIBUTE only
        }
    });


//  Create a DIRECTIVE:
//  METHOD:  .directive( 1, 2 )
//  Parameters:
//  1.  Name of Directive - In Camel Case
//  2.  CallBack Function that RETURNS an Object AND whatever else you tell it to do


