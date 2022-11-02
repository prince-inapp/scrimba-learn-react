import React from 'react';
import '../App.css';

const Die = (props) => {
    return(
        <div className={props.isHeld? "die-face-held": "die-face"} onClick={props.holdDice}>
            <h2>
                {props.value}
            </h2>
        </div>
    )
}
export default Die;