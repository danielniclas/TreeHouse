/**
 * Created by danielniclas on 3/15/17.
 */


import React, {PropTypes} from 'react';

import Counter from './Counter';                        //  Component DEPENDENCY


const Player = props => {
    return (
        <div className="player">
            <div className="player-name">
                <a className="remove-player" onClick={props.onRemove}>✖</a>
                {props.name}
            </div>
            <div className="player-score">
                <Counter onChange={props.onScoreChange} score={props.score} />
            </div>
        </div>
    );
}

Player.propTypes = {
    // name: React.PropTypes.string.isRequired,
    // score: React.PropTypes.number.isRequired,
    // onRemove: React.PropTypes.func.isRequired,
    // onScoreChange: React.PropTypes.func.isRequired,

    //  Since we're now explicitly importing PropTypes from React in some components > instead of accessing PropTypes as a property on React with React.PropTypes
    //  >>  Have option to simply define them as PropTypes:

    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    onScoreChange: PropTypes.func.isRequired,


};


export default Player;          //  Simple EXPORT of Player function