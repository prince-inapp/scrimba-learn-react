import React from 'react';
import Logo from '.././images/Troll-Face.png';
import './Header.css'

export default function Header(){
    return(
            <div className="header">

                    <img className="header--logo" alt="logo" src={Logo}/>
                <h1 className="header--title">Meme Generator</h1>
                
                <p className="header--description">React Course - Project 3</p>
            </div>
    )
}