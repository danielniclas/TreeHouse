/**
 * Created by danielniclas on 3/14/17.
 */


//  <<  ENTRY POINT FOR OUR APPLICATION <<  index.js



import React from 'react';
import {render} from 'react-dom';

import Scoreboard from './src/containers/Scoreboard';

render(<Scoreboard />, document.getElementById('root'));


// START APP  ----------------------------------------------

    //  start app with: npm start  >>  start up steps included in package.json file
    //  Browser:  localhost:8080

// React App Build ----------------------------------------------

    //  Good way to start is to mock up the App VIEW using JSX  >>  just focus on static markup  >>  can add styling NOW
    //  Then find sections of App that are dynamic and conditionally shown, and break them into separate components

// React Properties  ----------------------------------------------

    //  Properties customize components
    //  Components must take properties to generate the virtual DOM  >>  Component functions take a 'prop' argument

// React Components  ----------------------------------------------

    //  React - Redux COMPONENTS:
    //  A COMPONENT is a function that returns a SINGLE React virtual DOM element

    //  propTypes >>  and OBJECT that contains all the keys a component can take, as well as a special type definition


    //  1.  STATELESS FUNCTIONAL COMPONENTS (SFC)   < Can not handle STATE
    //  2.  COMPONENT CLASS                         < Can handle STATE

    /*
    Basic Component (SFC):

        function Application(props) {               <<  props will be an {OBJECT} with the key of 'title' and value of "My Scoreboard" (string)
            return(
                <div className = "scoreboard">              <<  JSX uses className instead of class
                    <h1>Hello Mook</h1>
                    <h1> {props.title} </h1>                <<  JSX EXPRESSION:  { any JS EXPRESSION }  <<  MUST return value  (not if else - STATEMENT that does not evaluate to a value)
                    <p>I was rendered from the Application Component</p>
                </div>
            );
        }

        Application.propTypes = {
            title: React.PropTypes.string,        <<  Each key in this object is a property the Application can take - value is the property type
        };
        Application.defaultProps = {
            title: "Scoreboard",
        };

        ReactDOM.render(<Application title="My Scoreboard" />, document.getElementById('container'));       <<  title attribute is a PROPERTY
    */


//  1.  Presentational Component  << concerned with how things look  <<  just renders HTML as it receives 'prop' data

            // Logical Presentational Component  <<  Manage their own state  <<  may or may not take place in React LifeCycle events
            // Pure Presentational Component  <<  Stateless functions in React <<  do not manage their own state  <<  rely solely on props  <<  implemented as pure functions and do not take place in React LifeCycle events


//  2.  Container Component << concerned with how things work  <<  interacts and receives data from the object storing the entire state of the application

            //  <<  responsibility to propagate data down to the presentational components
            //  <<  no markup of its own, simply provides the data and behavior to presentational components


    //  Stopwatch        >> Logical Component  >> (STATEFUL) has NO dependency on any other components and MANAGE THEIR OWN {STATE}
    //  Add Player form  >> Logical Component  >> (STATEFUL) has NO dependency on any other components and MANAGE THEIR OWN {STATE}

    //  Stats           >>  Pure Component >>  (STATELESS) written as pure functions and rely on props passed down to them
    //  Counter         >>  Pure Component >>  (STATELESS) written as pure functions and rely on props passed down to them

    //  Player          >>  Pure Component >> (STATELESS) DEPENDS on other components and act as dependency on other components
    //  Header          >>  Pure Component >> (STATELESS) DEPENDS on other components and act as dependency on other components

    //  Scoreboard.js   >>  ROOT COMPONENT  >>  CONTAINER COMPONENT that >> PASSES DATA DOWN to other components


// JSX  ----------------------------------------------

    //  XML Style Syntax to build React.createElement calls
    //  JSX is NOT HTML > It is an alternate syntax for calling functions in JS

    //  JSX uses ATTRIBUTE SYNTAX  >>  gather information and use it to generate the virtual DOM

    //  Instead of this:    var myLink = React.createElement('a', {href: "https://teamtreehouse.com"}, "Treehouse");
    //  Use this:           var myLink = ( <a href = "https://teamtreehouse.com"> Treehouse </a> );
    //  Tool that understands JSX >> translate a JSX tag into a React.createElement call that the browser can execute
    //  Add build step into development to translate JSX code into regular JS
    //  Compiler to translate JSX > JS is Babel