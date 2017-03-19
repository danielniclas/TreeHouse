//  REACT is a library for writing User Interfaces

//  STATE:  Data in an application that can change / Piece of data that changes over time
//  REACT provides a mechanism to manage STATE within our components
//  FLUX is a popular design pattern  >>  consolidate STATE into a manageable form (REDUX library uses the FLUX pattern)

//  Data Flows DOWNWARDS from Parent to Child                         (Downwards in COMPONENT TREE)
//  Events/Data Flow UPWARDS from Child to Parent with CallBack functions  (Upwards in COMPONENT TREE)

//  DATA:
var PLAYERS = [
    {
        name: "Koot Koost",
        score: 100,
        id: 1,
    },
    {
        name: "Jibb Mook",
        score: 99,
        id: 2,
    },
    {
        name: "Snappy Nibbs",
        score: 101,
        id: 3,
    }
];

var nextId = 4;

// STOPWATCH (Stateful > Component Class) |  Local Component STATE  ----------------------------------------------

var Stopwatch = React.createClass({

    getInitialState: function(){            //  <<  In order to have STATE must use >> getInitialState  >> state.running  state.elapsedTime  state.previousTime
      return{
          running: false,                   //  these propertied have STATE and change < that is why they are included in getInitialState()
          elapsedTime: 0,
          previousTime: 0,
      }
    },

    componentDidMount: function(){              //  REACT Life Cycle Method  <<  function will be called as soon as 'Stopwatch' CLASS is added to our DOM on the page
                                                //  fires as soon as component is mounted on the page!
        this.interval = setInterval(this.onTick, 100);      //  <<  REPEATED METHOD CALL USING setInterval(1,2)  1.  METHOD to call  2.  Interval
    },
    componentWillUnmount: function(){           //  REACT Life Cycle Method <<  PREVENT MEMORY LEAK  <<  GET RID OF STOPWATCH when un-mount
        clearInterval(this.interval);
    },

    onTick: function(){
        if (this.state.running){
            var now = Date.now();
            this.setState({                     //  setState() re-render
                previousTime: now,
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
            })
        }
        console.log("onTick")
    },

    onStart: function() {
        this.setState({
            running: true,
            previousTime: Date.now(),
        })
    },
    onStop: function(){
        this.setState({
            running: false
        })
    },
    onReset: function(){
        this.setState({
           elapsedTime: 0,
           previousTime: Date.now(),
        });
    },

    render: function(){                                 //  PRINT OUT FOR VIRTUAL DOM
        // var startStop;
        // if (this.state.running){
        //     startStop = <button>Stop</button>
        // }else {
        //     startStop = <button>Start</button>
        // }

        var seconds = Math.floor(this.state.elapsedTime / 1000);
        var startStop = this.state.running ? <button onClick={this.onStop}>Stop</button> : <button onClick={this.onStart}>Start</button>;   //  Ternary ( condition ? true : false   ) FOR TEXT IN DYNAMIC BUTTON THAT CHANGES  (can't use if/else)

        return(
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <div className="stopwatch-time">{seconds}</div>
                {startStop}
                <button onClick={this.onReset}>Reset</button>
            </div>
        )
    }
});

// ADD PLAYER FORM (Stateful > Component Class)  |  Local Component STATE ----------------------------------------------


var AddPlayerForm = React.createClass({         //  <<  Stateful component class
                                                //  Inputs are STATEFUL - as you enter characters you change state

    propTypes: {
        onAdd: React.PropTypes.func.isRequired,
    },
    getInitialState: function () {          //  CREATE STATE <<<
        return {
            name: "",                       //  return {STATE} object: 'name'  >>  state.name
        };
    },
    onNameChange: function(e){
        console.log('onNameChange: ', e.target.value);  //  for INPUT FIELD >>  e.target.value > target is the INPUT FIELD > value is the value typed in
        this.setState({name: e.target.value});          //  set the STATE with e.target.value >> every time we type we update STATE and cause re-render
    },
    onSubmit: function(e) {                                         // << submit event
        console.log("Submit >> onSubmit >> e.preventDefault()");
        e.preventDefault();
        this.props.onAdd(this.state.name);
        this.setState({name:""});
    },
    render: function() {
        return (
            <div className="add-player-form">
                <form onSubmit={this.onSubmit}>
                    <input type="text" value={this.state.name} onChange={this.onNameChange}/>
                    <input type="submit" value="Add Player" />
                </form>
            </div>
        )
    }
});


//  Component to represent our App:
//  A function that returns a REACT Virtual DOM element
//  Our Custom Component is CAPITAL <<  Differentiate from the built in Components - like h1, div, span and others


// function Application() {
//   return(
//       <div>
//         <h1> HELLO FROM MOOKORS</h1>
//         <p> I was rendered from the Application Component</p>
//       </div>
//   );
// }


// HEADER (Stateless) ----------------------------------------------


function Header (props) {
  return(
      <div className="header">
        <Stats players={props.players} />
        <h1>{props.title}</h1>           {/*JSX Expression >>  to add key value pair >> Inside the curly braces is regular JS expression - MUST BE EXPRESSION THAT EVALUATES TO A VALUE */}
        <Stopwatch />
      </div>
  );
}

Header.propTypes = {
    title: React.PropTypes.string.isRequired,
    players: React.PropTypes.array.isRequired,
};


// STATS (Stateless) ----------------------------------------------


function Stats(props) {

    var totalPlayers = props.players.length;
    var totalPoints = props.players.reduce(function(total, player){         //  ARRAY function reduce(1,2)  >> 1.  iterator function  2.  initial value for what we are reducing > 0
                                                                            //  1.  'total' > an accumulator - accumulates our total value  2.  'player' player we are iterating on
                                                                            //  RETURN >> 'total' + player.score
        return total + player.score;
    }, 0);

    return(
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    players:React.PropTypes.array.isRequired,
};



// var Counter = React.createClass({             // << COMPONENT CLASS
//                                               //  The object that createClass takes is an object that will define the methods of our class
//                                               //  return VIRTUAL DOM REPRESENTATION for our components
//
//     propTypes: {
//         // score: React.PropTypes.number.isRequired,
//         initialScore: React.PropTypes.number.isRequired,
//     },
//     render: function(){                         //  <<  Built In Function
//         return (
//             <div className="counter">
//                 <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
//                 {/*<div className="counter-score"> {this.props.score} </div>   /!* In a COMPONENT CLASS, props is a property of the class itself <<  add 'this'  Not passed into the render function like a STATELESS FUNCTIONAL COMPONENT *!/*/}
//                 <div className="counter-score"> {this.state.score} </div>
//                 <button className="counter-action increment" onClick={this.incrementScore} > + </button>
//             </div>
//         );
//     },
//     getInitialState: function(){                //  <<  Built In Function
//         return {
//             score: this.props.initialScore,
//         }
//     },
//     incrementScore: function(e) {
//         console.log('Counter >> Increment Score: ', e);
//         this.setState({                             //  Each time we call the STATE our render method is called again
//             score: (this.state.score + 1),          //  when we call this.setState >> notifies counter class that STATE has been update >>  need to re-render itself (render METHOD called)
//         })
//     },
//     decrementScore: function(e){
//         this.setState({
//             score: (this.state.score - 1),
//         })
//     },
// });


// COUNTER (Stateless Functional Component) ----------------------------------------------


            //  DATA Flows DOWN >> From Application Component Class    (Score passed down from Parent)
            //  EVENTS and CHANGED communicated UP  >>  Call Back Functions  (Buttons for changing the score < a property of the counter is that it can change)



function Counter(props){                    //  'button' COMPONENT has property 'onClick'
                                            //  Native DOM components in REACT contain many onClick, onDoubleClick onMouseOver HANDLERS
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick = {function(){props.onScoreChange(-1);}}> - </button>
            <div className="counter-score"> {props.score} </div>
            <button className="counter-action increment" onClick = {function(){props.onScoreChange(+1);}} > + </button>
        </div>
    );
}

Counter.propTypes={         //  Counter is not handling STATE anymore > now Stateless Component > need to pass the SCORE
    score: React.PropTypes.number.isRequired,
    onScoreChange: React.PropTypes.func.isRequired,                 //  <<  CALL BACK FUNCTION  <<  EVENT communicated up (onScoreChange Property for Counter)
};


// function Counter (props){                                               // <<  STATELESS FUNCTIONAL CLASS
//   return (
//       <div className="counter">
//         <button className="counter-action decrement"> - </button>
//         <div className="counter-score"> {props.score} </div>
//         <button className="counter-action increment"> + </button>
//       </div>
//       );
// }

// Counter.propTypes = {
//     score: React.PropTypes.number.isRequired,
// };



// PLAYERS (Stateless) ----------------------------------------------


function Player(props) {
  return (
      <div className="players">
        <div className="player">
          <div className="player-name">
              <a className="remove-player" onClick={props.onRemove}>✖</a>
              {props.name}
          </div>
          <div className="player-score">
              {/*<Counter score={props.score} />*/}
              {/*<Counter initialScore={props.score} />*/}
              <Counter score = {props.score} onScoreChange={props.onScoreChange} />             {/*  Pass function {OBJECT} to 'button' component > so it is called when clicked */}
          </div>
        </div>
      </div>
  );
}

Player.propTypes = {
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    onScoreChange: React.PropTypes.func.isRequired,     //  Relay 'onScoreChange() EVENT UP  >>  Communicating UP
    onRemove: React.PropTypes.func.isRequired,
};



// APPLICATION (Stateful > Component Class |  Application STATE ) ----------------------------------------------


//  APPLICATION SHOULD be STATEFUL COMPONENT >> TO HOLD THE APPLICATION STATE  <<
//  PLAYERS change over time including NAMES, HOW MANY PLAYERS, etc.
//  Able to Change our state from  our application, and CASCADE THE DATA DOWN FROM PLAYER TO COUNTER

var MyApplication  = React.createClass({        //  Core Application added to JS COMPONENT CLASS (this is a CLASS DEFINITION)  >> STATEFUL <<


    //  DATA >>>

    //  prop.initialPlayers >> state.players
    //  prop.title

    propTypes: {                                //  propTypes as a PROPERTY of our COMPONENT CLASS
    //  Document the Property Types
    //  Each key in this object will be a property that Application can take

    title: React.PropTypes.string,                                          //  Property #1
    initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({         //  Property #2
        name: React.PropTypes.string.isRequired,
        score: React.PropTypes.number.isRequired,
        id: React.PropTypes.number.isRequired,
    })).isRequired,      //  players is an array that MUST BE PASSED INTO OUR PROPERTIES
    // title: React.PropTypes.string.isRequired,
    },

    getInitialState: function(){                    //  REACT COMPONENT CLASS > BUILT IN METHOD  >>  TURN {props} to>>> {state}
        return {
            players: this.props.initialPlayers,     //  Our entire array of players << return as a {STATE} object <<<<<<<<<<<<<<<<<  ENTRY  <<<<<<<<<<<<<<<<<
                                                    //  Moves >>  PLAYERS from 'props' {OBJECT} to 'state' {OBJECT}
        }
    },
    getDefaultProps: function () {                  //  <<<  BUILT IN FUNCTION
        return {
            title: "Koostors Scoreboard"
        }
    },

    //  DATA >>>  END

    onScoreChange: function(index, delta) {                     //  <<<  Custom Function
        console.log('onScoreChange: ', delta, 'INDEX: ', index);
        this.state.players[index].score += delta;

        this.setState(this.state);                              //  this.setState() >> MUST indicate to REACT that 'this.state' has changed and that it should RE-RENDER >>  Calls render()  <<
                                                                //  Each time we set the state >>  render() METHOD is called again
    },
    onPlayerAdd: function(name) {
        console.log("Player Added: ", name);
        this.state.players.push({
            name: name,
            score: 0,
            id: nextId,
        });
        this.setState(this.state);                              //  set state and re-render
        nextId =+ 1;
    },
    onRemovePlayer: function(index){
        this.state.players.splice(index, 1);
        this.setState(this.state);                              //  set state and re-render
        console.log("Remove Player index: ", index);
    },

    render: function() {                            //  <<<  BUILT IN FUNCTION   <<   PRINT OUT FOR VIRTUAL DOM
        return(
           <div className="scoreboard">
               <Header title={this.props.title} players={this.state.players}/>
               <div className="players">
                   {this.state.players.map(function(player, index){       //  array function map() >> apply function to each player of [PLAYERS] <<  ITERATE over each player in props.players

                                                                          //  map() returns an ARRAY OF PLAYER COMPONENTS >> In a REACT JSX EXPRESSION, an array of components is rendered in the DOM one after the other
                                                                          //  LIKE A LIST!!  (like ng-repeat)

                       return (
                           <Player
                               onScoreChange={function(delta){this.onScoreChange(index,delta)}.bind(this)}      //  onScoreChange PASSED UP (Data at TOP of APPLICATION)  --  using an anonymous function will lose the reference to 'this'
                                                                                                                //  to fix >> add .bind(this)
                                                                                                                //  map() will pass the 'index' as the second argument to our iterator function
                               onRemove={function(){this.onRemovePlayer(index)}.bind(this)}
                               name={player.name}
                               score={player.score}
                               key={player.id} />                       //  return what should be rendered for each player in the ARRAY

                                                                        //  .bind(this)  >>
                       );                                               //  Since inside of a function that is inside our map() iterator > 'this' DOES NOT POINT TO OUR INSTANCE
                                                                        //  For function passed to the iterator >> need to call .bind(this)
                                                                        //  When we call .bind(this) on our anonymous function, it will make the 'this' within our function applied to the same 'this' that it would be outside.
                   }.bind(this))}


               </div>
               <AddPlayerForm onAdd={this.onPlayerAdd} />
           </div>
        );
    }
});

ReactDOM.render(<MyApplication initialPlayers={PLAYERS}  />, document.getElementById('container'));         //     Must supply PLAYERS array to our application


// function Application(props) {             //  Component function takes an argument for PROPERTIES (props)
//                                           //  When 'Application' is called, 'props' will be an object with the key of 'title' and value of 'My Scoreboard'  <<  see ReactDOM.render
//     return(
//         <div className="scoreboard">
//
//           {/*<div className="header">*/}
//             {/*<h1>{props.title}</h1>*/}
//           {/*</div>*/}
//
//           <Header title={props.title}/>                       {/* Application has props.title and need to pass this down to the Header >>  Now Header takes a title property as well as Application  */}
//
//           {/*<div className="players">*/}
//             {/*<div className="player">*/}
//               {/*<div className="player-name">*/}
//                 {/*Mookors McJibb*/}
//               {/*</div>*/}
//               {/*<div className="player-score">*/}
//                 {/*<div className="counter">*/}
//                   {/*<button className="counter-action decrement"> - </button>*/}
//                   {/*<div className="counter-score"> 31 </div>*/}
//                   {/*<button className="counter-action increment"> + </button>*/}
//                 {/*</div>*/}
//               {/*</div>*/}
//             {/*</div>*/}
//           {/*</div>*/}
//
//           <div className="players">
//               {props.players.map(function(player){                              //  array function map() >> apply function to each player of [PLAYERS] <<  ITERATE over each player in props.players
//                   return <Player name={player.name} score={player.score} key={player.id} />     //  return what should be rendered for each player in the ARRAY
//                                                                                 //  In React JSX expression, an array of components will be rendered in the DOM like a list
//               })}
//               {/*<Player name="Koost Koost" score={100} />*/}
//               {/*<Player name="Mook Pillar" score={99} />*/}
//           </div>
//
//         </div>
//     );
// }


// REACT Function to render code to our page
// ReactDOM.render (1,2)    1.  VIRTUAL DOM ELEMENT (JSX code below)   2.  REAL DOM ELEMENT to render our VIRTUAL DOM  << DOM element to place code

// ReactDOM.render(<h1>Hello MOOKORS</h1>, document.getElementById('container'));


// Application.propTypes = {         //  After our Application Component has been declared   <<  Important for debugging
//                                   //  Document the Property Types
//                                   //  Each key in this object will be a property that Application can take
//
//     title: React.PropTypes.string,
//     players: React.PropTypes.arrayOf(React.PropTypes.shape({
//         name: React.PropTypes.string.isRequired,
//         score: React.PropTypes.number.isRequired,
//         id: React.PropTypes.number.isRequired,
//     })).isRequired,      //  players is an array that MUST BE PASSED INTO OUR PROPERTIES
//     // title: React.PropTypes.string.isRequired,
// };

// Application.defaultProps = {      //  Default properties for 'Application' COMPONENT   >>  props.title
//   title: "Koostors Scoreboard"
// };

// ReactDOM.render(<Application title="Nibbs Scoreboard" />, document.getElementById('container'));         //

