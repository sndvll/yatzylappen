import React, {Component} from 'react';
import {getTypeString, possiblePoints} from "../utils/utils";
import PropTypes from 'prop-types';
import {FaTimesCircle} from 'react-icons/fa';

export class EditPoint extends Component {

    state = {
        value: 0
    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        let value = this.state.value;
        if(!this.state.value) {
            value = possiblePoints(this.props.type)[0];
        }
        this.props.pointChange({
            value: value,
            type: this.props.type,
            player: this.props.player
        });
        this.props.close();
    };

    render() {
        const values = possiblePoints(this.props.type).map(value => <option key={value} value={value}>{value}</option>);
        return (
            <div className="edit-point">
                <div className="data">
                    <div className="name">{this.props.player}</div>
                    <div style={{'fontSize': '1.5em'}}>{getTypeString(this.props.type)}</div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <select onChange={this.handleChange} id="value" value={this.state.value}>
                                {values}
                            </select><br />
                            <button type="submit">Spara</button>
                        </form>
                    </div>
                </div>
                <div className="close" >
                    <FaTimesCircle onClick={this.props.close} />
                </div>
            </div>
        )
    }
}

EditPoint.propTypes = {
    pointChange: PropTypes.func
};