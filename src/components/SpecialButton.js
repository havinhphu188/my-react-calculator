import React from 'react';
import '../App.css';

function SpecialButton(props) {
    return (
      <button className="component-button" onClick={props.onClick}>
        {props.value}
      </button>
    );
}

export default SpecialButton;