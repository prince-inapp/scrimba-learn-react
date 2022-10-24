import React from 'react';
import Logo from '../assets/logo.svg';
import classes from './NavBar.module.css';

export const NavBar = () => {
    return (
            <nav className={classes.navbar}>
                    <img className={classes.logo} src={Logo} />
                    <h3>ReactFacts</h3>
                    <h4>React Course - Project 1</h4>
            </nav>
    )
};