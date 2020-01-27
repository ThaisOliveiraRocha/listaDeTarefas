import React, {Component} from 'react';
import Calendar from 'react-calendar';

class Calendario extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        data: new Date(),
    }

    render() {
        return (
            <div className="corpo">
                <center>
                    <h1>Calendario</h1>
                    
                    <Calendar 
                        onChange={this.onChange}
                        value={this.state.date}/>
                </center>
            </div>
        );
    }
}

export default Calendario;