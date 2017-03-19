import React, {Component} from 'react';

import Stopwatch from '../components/Stopwatch';      //  ROOT Container Component
import Stats from '../components/Stats';
import Counter from '../components/Counter';

//  Since Player and Header no-longer import the Stats, Counter and Stopwatch components from within their files > the Stopwatch, Counter and Stats imports are greyed out and CAN BE REMOVED

import AddPlayerForm from '../components/AddPlayerForm';
import Player from '../components/Player';
import Header from '../components/Header';


// const INITIAL_STATE = {
//   players: [
//     {
//       name: 'Jim Hoskins',
//       score: 31,
//     },
//     {
//       name: 'Andrew Chalkley',
//       score: 20,
//     },
//     {
//       name: 'Alena Holligan',
//       score: 50,
//     },
//   ],
// };




export default class Scoreboard extends Component {   //  Scoreboard is the CONTAINER COMPONENT > Passes {state} down to other Components
                                                      //  Good candidate for the {REDUX STORE}  << object where entire state of application is stored
                                                      //  Consideration for REDUX >> will the data you are storing be used by another Component  >>  if data specific for a single Component > safe to keep that value in the local state

    state = {
        players: [
            {
                name: 'Jim Hoskins',
                score: 31,
            },
            {
                name: 'Andrew Chalkley',
                score: 20,
            },
            {
                name: 'Alena Holligan',
                score: 50,
            },
        ],
    };

    // const Scoreboard = React.createClass({

        // getInitialState: function () {
        //     return INITIAL_STATE;
        // },

        onScoreChange = (index, delta) => {                   //  Event Handler 1  << ACTION TYPE
            this.state.players[index].score += delta;
            this.setState(this.state);
        };

        onAddPlayer = (name) => {                             //  Event Handler 2  << ACTION TYPE
            this.state.players.push({name: name, score: 0});
            this.setState(this.state);
        };

        onRemovePlayer = (index) => {                         //  Event Handler 3  << ACTION TYPE
            this.state.players.splice(index, 1);
            this.setState(this.state);
        };

        render () {
            return (
                <div className="scoreboard">
                  <Header players={this.state.players}/>
                  <div className="players">
                      {this.state.players.map(function (player, index) {
                          return (
                              <Player
                                  name={player.name}
                                  score={player.score}
                                  key={player.name}
                                  onScoreChange={(delta) => this.onScoreChange(index, delta)}
                                  onRemove={() => this.onRemovePlayer(index)}
                              />
                          );
                      }.bind(this))}
                  </div>
                  <AddPlayerForm onAdd={this.onAddPlayer}/>
                </div>
            );
        }
}

// HEADER  ----------------------------------------------

// function Header(props) {
//   return (
//     <div className="header">
//       <Stats players={props.players} />
//       <h1>Scoreboard</h1>
//       <Stopwatch />
//     </div>
//   );
// }
//
// Header.propTypes = {
//   players: React.PropTypes.array.isRequired,
// };

// Move to components/Stats.js
//  STATS  -----------------------------------------------------------------------
// function Stats(props) {
//   const playerCount = props.players.length;
//   const totalPoints = props.players.reduce(function(total, player) {
//     return total + player.score;
//   }, 0);
//
//   return (
//     <table className="stats">
//       <tbody>
//         <tr>
//           <td>Players:</td>
//           <td>{playerCount}</td>
//         </tr>
//         <tr>
//           <td>Total Points:</td>
//           <td>{totalPoints}</td>
//         </tr>
//       </tbody>
//     </table>
//   )
// }
//
// Stats.propTypes = {
//   players: React.PropTypes.array.isRequired,
// };

// STOPWATCH   ------------------------------------------------------------------------

// const Stopwatch = React.createClass({
//   getInitialState: function () {
//     return ({
//       running: false,
//       previouseTime: 0,
//       elapsedTime: 0,
//     });
//   },
//
//   componentDidMount: function () {
//     this.interval = setInterval(this.onTick);
//   },
//
//   componentWillUnmount: function () {
//     clearInterval(this.interval);
//   },
//
//
//   onStart: function () {
//     this.setState({
//       running: true,
//       previousTime: Date.now(),
//     });
//   },
//
//   onStop: function () {
//     this.setState({
//       running: false,
//     });
//   },
//
//   onReset: function () {
//     this.setState({
//       elapsedTime: 0,
//       previousTime: Date.now(),
//     });
//   },
//
//   onTick: function () {
//     if (this.state.running) {
//       var now = Date.now();
//       this.setState({
//         elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
//         previousTime: Date.now(),
//       });
//     }
//   },
//
//   render: function () {
//     var seconds = Math.floor(this.state.elapsedTime / 1000);
//     return (
//       <div className="stopwatch" >
//         <h2>Stopwatch</h2>
//         <div className="stopwatch-time"> {seconds} </div>
//         { this.state.running ?
//           <button onClick={this.onStop}>Stop</button>
//           :
//           <button onClick={this.onStart}>Start</button>
//         }
//         <button onClick={this.onReset}>Reset</button>
//       </div>
//     )
//   }
// });

// PLAYER  ----------------------------------------------------------------------

// function Player(props) {
//   return (
//     <div className="player">
//       <div className="player-name">
//         <a className="remove-player" onClick={props.onRemove}>✖</a>
//         {props.name}
//       </div>
//       <div className="player-score">
//         <Counter onChange={props.onScoreChange} score={props.score} />
//       </div>
//     </div>
//   );
// }
//
// Player.propTypes = {
//   name: React.PropTypes.string.isRequired,
//   score: React.PropTypes.number.isRequired,
//   onRemove: React.PropTypes.func.isRequired,
//   onScoreChange: React.PropTypes.func.isRequired,
// };

// COUNTER  ----------------------------------------------------------

// function Counter(props) {
//  return (
//    <div className="counter" >
//      <button className="counter-action decrement" onClick={() => props.onChange(-1)}>
//        -
//      </button>
//      <div className="counter-score"> {props.score} </div>
//      <button className="counter-action increment" onClick={() => props.onChange(1)}>
//        +
//      </button>
//    </div>
//  );
// }
//
// Counter.propTypes = {
//   onChange: React.PropTypes.func.isRequired,
//   score: React.PropTypes.number.isRequired,
// };


//  AddPlayerForm FORM  ----------------------------------------------------------------------


// const AddPlayerForm = React.createClass({
//   propTypes: {
//     onAdd: React.PropTypes.func.isRequired,
//   },
//
//   getInitialState: function () {
//     return { name: '' };
//   },
//
//   onNameChange: function (e) {
//     const name = e.target.value;
//     this.setState({ name: name });
//   },
//
//   onSubmit: function (e) {
//     if (e) e.preventDefault();
//     this.props.onAdd(this.state.name);
//     this.setState({ name: '' });
//   },
//
//   render: function () {
//     return (
//       <div className="add-player-form">
//         <form onSubmit={this.onSubmit}>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={this.onNameChange}
//             placeholder="Player Name"
//           />
//           <input type="submit" value="Add Player" />
//         </form>
//       </div>
//     );
//   }
// });

// export default Scoreboard;