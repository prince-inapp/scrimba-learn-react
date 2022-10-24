import React from 'react';
import classes from './Main.module.css';
import Button from "./UI/Button";
import LkInLogo from '../images/linkedin.png';

const Main = () =>{
    return(
            <main className={classes.mainContainer}>
                <h1 className={classes.mainTitleName}>Laura Smith</h1>
                <h5 className={classes.mainDesignation}>Frontend Developer</h5>
                <h6><p>laurasmith.website</p></h6>
                <Button src={LkInLogo} />
                <button>LinkedIn</button>
                <h2>About</h2>
                <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
                <h2>Interests</h2>


            </main>
    )
};

export default Main;