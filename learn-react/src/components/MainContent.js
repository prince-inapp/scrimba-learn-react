import React from 'react';
import classes from './MainContent.module.css';

export const MainContent = () => {
    return (
            <main>
                <h1 className={classes.mainTitle}>Fun Facts About React</h1>
                <ul className={classes.mainFacts}>
                    <li>Was first released in 2013</li>
                    <li>Was Originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, inclusding mobile apps</li>
                </ul>
            </main>
    )
}