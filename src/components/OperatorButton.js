import React from 'react';
import '../App.css';

function OperatorButton(props) {
    return (
      <button className="component-operator-button" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

export default OperatorButton;