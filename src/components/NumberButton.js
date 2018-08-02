import React from 'react';
import '../App.css';

function NumberButton(props) {
    return (
      <button className="component-button" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

export default NumberButton;