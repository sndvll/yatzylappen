import React from 'react';
import PropTypes from 'prop-types';

export const Cell = (props) => {
    return <div onClick={props.editValue} className={props.type ? props.type : ''}>{props.value}</div>
};

Cell.propTypes = {
    editValue: PropTypes.func
};