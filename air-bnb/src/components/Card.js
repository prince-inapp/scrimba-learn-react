import React from "react";
//import Image from '../assets/katie-zaferes.png';
import star from '../assets/images/star.png';

export default function Card(props){
    let badgeText;
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT";
    }else if(props.item.location === "Online"){
        badgeText = "Online";
    }
    return(
            <div className="card">
                { badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={`/Images/${props.item.coverImg}`} className="card--image"/>
                <div className="card--stats">
                    <img src={star} className="card--star"/>
                    <span>{props.item.stats.rating}</span>
                    <span className="grey">({props.item.stats.reviewCount})</span>
                    <span className="grey">{props.item.location}</span>
                </div>
                <p>{props.item.title}</p>
                <p><span className="bold">From ${props.item.price}</span>/person</p>
            </div>
    )
}