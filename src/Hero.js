import React from "react";
import IntroImg from "./images/illustration-intro.png"
import "./Hero.css"

export default function Hero() {
    return (
        <section className="hero">
            <img src={IntroImg}></img>
            <div className="hero-text">
                <h1>All your files in one secure location, accessible anywhere.</h1>
                <p>Fylo stores all you most important files in one secure location. Acces them wherever you need, share and collaborate with friends family, and co-workers.</p>
            </div>
            <button type="button">Get Started</button>
        </section>
    )
}