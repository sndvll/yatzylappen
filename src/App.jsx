import React, {Component} from 'react';
import './App.css';
import {Combos} from "./components/combos.component";
import {Player} from "./components/player.component";
import {getTypePosition, newPlayer} from "./utils/utils";
import { FaDice, FaUserPlus, FaUndo } from 'react-icons/fa';
import update from 'immutability-helper';
import shortid from 'shortid';


export class App extends Component {
    state = {
        players: {},
        showUndoButton: false
    };

    handleSetPoint = (point) => {
        if (point.value === 0) {
            return;
        }
        this.setState({
            history: this.state.players,
            showUndoButton: true,
            players: update(this.state.players, {
                [point.player]: {
                    points: {
                        [getTypePosition(point.type)]: {
                            [point.type]: {
                                value: {$set: Number(point.value)},
                                valid: {$set: 'valid'}
                            }
                        }
                    }
                }
            })
        });
    };

    handleSetStrike = (point) => {
        this.setState({
            history: this.state.players,
            showUndoButton: true,
            players: update(this.state.players, {
                [point.player]: {
                    points: {
                        [getTypePosition(point.type)]: {
                            [point.type]: {
                                value: {$set: 0},
                                valid: {$set: 'strike'}
                            }
                        }
                    }
                }
            })
        });
    };

    handleAddPlayer = () => {
        const playerName = window.prompt('Namn?');
        if(playerName) {
            const players = {...this.state.players};
            if (!players[playerName]) {
                players[playerName] = newPlayer(playerName);
                this.setState({
                    history: this.state.players,
                    showUndoButton: true,
                    players
                });
            }
        }
    };

    handleUndo = () => {
        this.setState({
            history: {},
            players: {...this.state.history},
            showUndoButton: false
        })
    };

    render() {
        const players = Object.keys(this.state.players).map(key =>  <Player key={this.state.players[key].name + shortid.generate()} setPoint={this.handleSetPoint} setStrike={this.handleSetStrike} player={this.state.players[key]}/>);
        return (
            <div className="App">
                <h2>YatzylAppen <FaDice /></h2>
                <div id="protocol">
                    <Combos />
                    <div className="players">{players}</div>
                </div>
                <div className="icons">
                { players.length <= 5 ? <FaUserPlus onClick={this.handleAddPlayer} /> : null }
                { this.state.showUndoButton ? <FaUndo onClick={this.handleUndo}/> : null }
                </div>
            </div>
        )
    }
}

export default App;
