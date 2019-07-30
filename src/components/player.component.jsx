import React, {Component} from 'react';
import {Cell} from "./cell.component";
import PropTypes from 'prop-types';
import {EditPoint} from "./edit-point.component";
import shortid from 'shortid';

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
        const { name } = this.props.player;
        const {top, bottom} = this.props.player.points;
        const topSum = Object.values(top).reduce((total, current) => {
            return { value: total.value + current.value };
        });
        const bonus = topSum.value > 63 ? 50 : 0;
        const bonusClasses = bonus === 50 ? 'valid' : 'pristine';
        const bottomSum = Object.values(bottom).reduce((total, current) => {
            return { value: total.value + current.value };
        });

        const topCells = Object.keys(top).map(key => {
            return <Cell
                        key={key + shortid.generate()}
                        value={top[key].value}
                        valid={top[key].valid}
                        type='point'
                        editValue={top[key].valid === 'pristine' ? () => this.showEditPoint(key, top[key].value) : () => {}} />
        });
        const bottomCells = Object.keys(bottom).map(key =>{
            return <Cell
                        key={key + shortid.generate()}
                        value={bottom[key].value}
                        valid={bottom[key].valid}
                        type='point'
                        editValue={bottom[key].valid === 'pristine' ? () => this.showEditPoint(key, bottom[key].value) : () => {}} />
        });

        const editValue = (this.state.visible ?
            <EditPoint value={this.state.value}
                       close={() => this.showEditPoint('', '')}
                       type={this.state.type}
                       pointChange={this.props.setPoint}
                       setStrike={this.props.setStrike}
                       player={this.props.player.name}/> : null);
        return (
            <div>
                <div>
                    {editValue}
                </div>
                <div className="cells player">
                    <Cell type="name" value={name.substring(0,2)}/>
                    {topCells}
                    <Cell type="sum" value={topSum.value}/>
                    <Cell type="bonus" valid={bonusClasses} value={bonus}/>
                    {bottomCells}
                    <Cell type="total" value={topSum.value + bonus + bottomSum.value}/>
                </div>
            </div>
        )
    }
}

Player.propTypes = {
    player: PropTypes.object,
    setPoint: PropTypes.func,
    setStrike: PropTypes.func
};