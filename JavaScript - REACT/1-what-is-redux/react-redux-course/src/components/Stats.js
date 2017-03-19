/**
 * Created by danielniclas on 3/15/17.
 */

import React, {PropTypes} from 'react';    //  Not importing 'Component' because not extending a class, just defining this component as a PURE FUNCTION

//  Stats           >>  Pure Component >>  (STATELESS) written as pure functions and rely on props passed down to them

// function Stats(props) {
//     const playerCount = props.players.length;
//     const totalPoints = props.players.reduce(function(total, player) {
//         return total + player.score;
//     }, 0);

    const Stats = props => {
        const playerCount = props.players.length;
        const totalPoints = props.players.reduce(function(total, player) {
            return total + player.score;
        }, 0);

    return (
        <table className="stats">
            <tbody>
            <tr>
                <td>Players:</td>
                <td>{playerCount}</td>
            </tr>
            <tr>
                <td>Total Points:</td>
                <td>{totalPoints}</td>
            </tr>
            </tbody>
        </table>
        )
    };

    Stats.propTypes = {
        players: React.PropTypes.array.isRequired,
    };

    export default Stats;           //  Export STATS function