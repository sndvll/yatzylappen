import React, {Component} from 'react';
import './App.css';
import {Combos} from "./components/combos.component";
import {Player} from "./components/player.component";
import {getTypePosition, newPlayer} from "./utils/utils";
import { FaDice } from 'react-icons/fa';



export class App extends Component {
    state = {
        players: []
    };

    handleSetPoint = (point) => {
        this.state.players.forEach(playerState => {
            if(playerState.name === point.player) {
                playerState.points[getTypePosition(point.type)][point.type] = Number(point.value);
            }
        });
    };

    handleAddPlayer = () => {
        const playerName = window.prompt('Namn?');
        if(playerName) {
            const players = this.state.players;
            players.push(newPlayer(playerName));
            this.setState(players);
        }
    };

    render() {
        const players = this.state.players.map(player => <Player key={player.name} setPoint={this.handleSetPoint} player={player}/>);
        return (
            <div className="App">
                <h2>Yatzy <FaDice /></h2>
                <div id="protocol">
                    <Combos />
                    <div className="players">{players}</div>
                </div>
                <button type="button" onClick={this.handleAddPlayer}>Lägg till spelare</button>
            </div>
        )
    }
}

export default App;
