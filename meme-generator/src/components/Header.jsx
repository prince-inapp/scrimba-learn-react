import React from 'react';
import Logo from '.././images/Troll-Face.png';
import './Header.css'

export default function Header(){
    return(
            <header className="header">

                    <img className="header--logo" alt="logo" src={Logo}/>
                <h2 className="header--title">Meme Generator</h2>
                <h4 className="header--description">React Course - Project 3</h4>
            </header>
    )
}