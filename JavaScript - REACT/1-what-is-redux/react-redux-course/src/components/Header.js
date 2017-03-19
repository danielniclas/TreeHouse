/**
 * Created by danielniclas on 3/15/17.
 */


import React, {PropTypes} from 'react';

import Stats from './Stats';                            //  Component DEPENDENCY
import Stopwatch from './Stopwatch';                    //  Component DEPENDENCY


const Header = props => {
    return (
        <div className="header">
            <Stats players={props.players} />
            <h1>Scoreboard</h1>
            <Stopwatch />
        </div>
    );
};

Header.propTypes = {
    players: React.PropTypes.array.isRequired,
};

export default Header;          //  Simple EXPORT of Player function