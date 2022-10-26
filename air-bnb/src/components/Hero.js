import React from 'react';
import Gallery from '../assets/images/gallery.png'

export default function Hero(){
    return(
            <section className="hero">
                <img src={Gallery} className="hero--photo" />
                <h1 className="hero--text"> Online Experiences </h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
            </section>
    )
}