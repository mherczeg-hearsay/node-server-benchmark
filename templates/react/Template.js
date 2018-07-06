import React from 'react';

export default (props) => [
    <div>
        <span>firstName</span>
        <span>{ props.firstName }</span>
    </div>,
    <div>
        <span>lastName</span>
        <span>{ props.lastName }</span>
    </div>
];