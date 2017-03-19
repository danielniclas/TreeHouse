/**
 * Created by danielniclas on 3/14/17.
 */

import React, {Component, PropTypes} from 'react';



// STOPWATCH (Stateful > Component Class) |  Local Component {STATE}  ----------------------------------------------

// {state} managed in Stopwatch is tightly coupled to this Component with no dependencies on any other component >> not a good candidate for REDUX
//  Consideration for REDUX >> will the data you are storing be used by another Component  >>  if data specific for a single Component > safe to keep that value in the local state

export default class Stopwatch extends Component {          //  export from class definition


    // getInitialState: function(){            //  <<  In order to have STATE must use >> getInitialState  >> state.running  state.elapsedTime  state.previousTime
    //     return{
    //         running: false,                 //  these propertied have STATE and change < that is why they are included in getInitialState()
    //         elapsedTime: 0,
    //         previousTime: 0,
    //     }
    // },
    //

    state = {                           //  <<<  NOTE:  This used to be getInitialState  >>  now 'state' property declaration  (see above)
        running: false,
        previouseTime: 0,
        elapsedTime: 0,
    };

    componentDidMount () {                                  //  ES6 function - no 'function' keyword and no closing comma ','
        this.interval = setInterval(this.onTick);
    }

    componentWillUnmount () {                               //  ES6 function
        clearInterval(this.interval);
    }

    onStart = () => {                                        //  ES6 arrow function
        this.setState({
            running: true,
            previousTime: Date.now(),
        });
    };

    onStop = () => {                                         //  ES6 arrow function
        this.setState({
            running: false,
        });
    };

    onReset = () => {                                        //  ES6 arrow function
        this.setState({
            elapsedTime: 0,
            previousTime: Date.now(),
        });
    };

    onTick = () => {                                         //  ES6 arrow function
        if (this.state.running) {
            var now = Date.now();
            this.setState({
                elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
                previousTime: Date.now(),
            });
        }
    };

    render () {
        var seconds = Math.floor(this.state.elapsedTime / 1000);
        return (
            <div className="stopwatch" >
                <h2>Stopwatch</h2>
                <div className="stopwatch-time"> {seconds} </div>
                { this.state.running ?
                    <button onClick={this.onStop}>Stop</button>
                    :
                    <button onClick={this.onStart}>Start</button>
                }
                <button onClick={this.onReset}>Reset</button>
            </div>
        )
    }

}