import React from "react";
import Image from '../assets/katie-zaferes.png';
import star from '../assets/star.png';

export default function Card(){
    return(
            <div className="card">
                <img src={Image} className="card--image"/>
                <div className="card--stats">
                    <img src={star} className="card--star"/>
                    <span>5.0</span>
                    <span className="grey">(6)</span>
                    <span className="grey">USA</span>
                </div>
                <p>Life Lessons with Katie</p>
                <p><span className="bold">From $187</span>/person</p>
            </div>
    )
}