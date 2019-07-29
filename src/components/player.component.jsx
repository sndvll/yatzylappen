import React, {Component} from 'react';
import {Cell} from "./cell.component";
import PropTypes from 'prop-types';
import {EditPoint} from "./edit-point.component";

export class Player extends Component {

    state = {
        visible: false,
        value: '',
        type: ''
    };

    showEditPoint = (type, value) => {
        this.setState({visible: !this.state.visible, type: type, value: value})
    };

    render() {
        const {top, bottom} = this.props.player.points;
        const topSum = Object.values(top).reduce((total, currentValue) => total + currentValue);
        const bonus = topSum > 63 ? 50 : 0;
        const bottomSum = Object.values(bottom).reduce((total, currentValue) => total + currentValue);

        const editValue = (this.state.visible ?
            <EditPoint value={this.state.value}
                       close={() => this.showEditPoint('', '')}
                       type={this.state.type}
                       pointChange={this.props.setPoint}
                       player={this.props.player.name}/> : null);
        return (
            <div>
                <div>
                    {editValue}
                </div>
                <div className="cells player">
                    <Cell type="name" value={this.props.player.name.substring(0,2)}/>
                    <Cell value={top.ones} editValue={() => this.showEditPoint('ones', top.ones)}/>
                    <Cell value={top.twos} editValue={() => this.showEditPoint('twos', top.twos)}/>
                    <Cell value={top.threes} editValue={() => this.showEditPoint('threes', top.threes)}/>
                    <Cell value={top.fours} editValue={() => this.showEditPoint('fours', top.fours)}/>
                    <Cell value={top.fives} editValue={() => this.showEditPoint('fives', top.fives)}/>
                    <Cell value={top.sixes} editValue={() => this.showEditPoint('sixes', top.sixes)}/>
                    <Cell type="sum" value={topSum}/>
                    <Cell type="bonus" value={bonus}/>
                    <Cell value={bottom.pair} editValue={() => this.showEditPoint('pair', bottom.pair)}/>
                    <Cell value={bottom.twoPair} editValue={() => this.showEditPoint('twoPair', bottom.twoPair)}/>
                    <Cell value={bottom.trips} editValue={() => this.showEditPoint('trips', bottom.trips)}/>
                    <Cell value={bottom.fourOfAKind}
                          editValue={() => this.showEditPoint('fourOfAKind', bottom.fourOfAKind)}/>
                    <Cell value={bottom.fullHouse} editValue={() => this.showEditPoint('fullHouse', bottom.fullHouse)}/>
                    <Cell value={bottom.smallStraight}
                          editValue={() => this.showEditPoint('smallStraight', bottom.smallStraight)}/>
                    <Cell value={bottom.largeStraight}
                          editValue={() => this.showEditPoint('largeStraight', bottom.largeStraight)}/>
                    <Cell value={bottom.chance} editValue={() => this.showEditPoint('chance', bottom.chance)}/>
                    <Cell value={bottom.yatzy} editValue={() => this.showEditPoint('yatzy', bottom.yatzy)}/>
                    <Cell type="total" value={topSum + bonus + bottomSum}/>
                </div>
            </div>
        )
    }
}

Player.propTypes = {
    player: PropTypes.object,
    setPoint: PropTypes.func
};