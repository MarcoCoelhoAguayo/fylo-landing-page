import React from "react";
import firstImg from "./images/icon-access-anywhere.svg"
import secondImg from "./images/icon-security.svg"
import thirdImg from "./images/icon-collaboration.svg"
import fourthImg from "./images/icon-any-file.svg"
import "./Perks.css"


export default function Perks() {
    return (
        <section className="perks">
            <div className="card">
                <img src={firstImg} className="card-icon"></img>
                <h2 className="card-title">Access your files, anywhere</h2>
                <p className="card-text">The ability to use a smartphone, tablet, or computer to access your account means your files follow you anywhere.</p>
            </div>
            <div className="card">
                <img src={secondImg} className="card-icon"></img>
                <h2 className="card-title">Security you can trust</h2>
                <p className="card-text">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
            </div>
            <div className="card">
                <img src={thirdImg} className="card-icon"></img>
                <h2 className="card-title">Real-time collaboration</h2>
                <p className="card-text">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required</p>
            </div>
            <div className="card">
                <img src={fourthImg} className="card-icon"></img>
                <h2 className="card-title">Store any type of file</h2>
                <p className="card-text">Whether you´re sharing hollidays photos or work documents, Fylo has you covered allowing fo all file types to be securely stored and shared.</p>
            </div>
        </section>
    )
}