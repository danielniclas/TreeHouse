/**
 * Created by danielniclas on 3/15/17.
 */

import React, {PropTypes} from 'react';    //  Not importing 'Component' because not extending a class, just defining this component as a PURE FUNCTION


//  Counter         >>  Pure Component >>  (STATELESS) written as pure functions and rely on props passed down to them

const Counter = props => {
    return (
        <div className="counter" >
            <button className="counter-action decrement" onClick={() => props.onChange(-1)}>
                -
            </button>
            <div className="counter-score"> {props.score} </div>
            <button className="counter-action increment" onClick={() => props.onChange(1)}>
                +
            </button>
        </div>
    );
};

Counter.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    score: React.PropTypes.number.isRequired,
};

export default Counter;