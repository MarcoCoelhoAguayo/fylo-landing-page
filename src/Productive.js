import React from "react";
import productiveImg from "./images/illustration-stay-productive.png"
import "./Productive.css"

export default function Productive() {
    return (
        <section className="productive">
            <div className="image">
                <img src={productiveImg}></img>
            </div>
            <div className="text">
                <h2>Stay productive, wherever you are</h2>
                <p>Never let location be an issue when accesing you files. Fylo has you covered for all you files storage needs.</p>
                <br />
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                <br />
                <div className="link">
                    <a src="#">See how Fylo works</a><span className="arrow"></span>
                </div>
              
            </div>
        </section>
    )
}