import React from 'react';
import PropTypes from 'prop-types';

export const Cell = (props) => {
    const type = props.type ? props.type : '';
    const valid = props.valid ? ' ' + props.valid: '';
    return <div onClick={props.editValue} className={type+valid}>{props.value}</div>
};

Cell.propTypes = {
    editValue: PropTypes.func,
    valid: PropTypes.string
};