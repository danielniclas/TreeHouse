/**
 * Created by danielniclas on 3/15/17.
 */


import React, {Component, PropTypes} from 'react';

//  Add Player form  >> Logical Component (Stateful)  >> has no dependency on any other components and manage their own state (similar to Stopwatch component)

export default class AddPlayerForm extends Component {  //  define AddPlayer form as a class that extends Component and make it our default export


   static propTypes: {                                 //  static keyword - PROPERTY INITIALIZER << special way of defining prop types for our class
        onAdd: React.PropTypes.func.isRequired,
    };

    state = {
        name: ''
    };

    onNameChange = (e) => {                        //  EVENT HANDLER - updated to Arrow Function
        const name = e.target.value;
        this.setState({ name: name });
    };

    onSubmit = (e) =>  {                           //  EVENT HANDLER - updated to Arrow Function
        if (e) e.preventDefault();
        this.props.onAdd(this.state.name);
        this.setState({ name: '' });
    };

    render () {                                     //  Built in function
        return (
            <div className="add-player-form">
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.onNameChange}
                        placeholder="Player Name"
                    />
                    <input type="submit" value="Add Player" />
                </form>
            </div>
        );
    }
}