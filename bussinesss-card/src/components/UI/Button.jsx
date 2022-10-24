import React from 'react';
import classes from "./Button.module.css";

const Button = (props) => {
    return(
            <a>
        <img className={classes.btnIcon} src={props.src}></img>
            </a>
    )
};
export default Button;