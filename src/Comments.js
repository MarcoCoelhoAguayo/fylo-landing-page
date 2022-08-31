import React from "react";
import decoration from "./images/bg-quotes.png"
import profile1 from "./images/profile-1.jpg"
import profile2 from "./images/profile-2.jpg"
import profile3 from "./images/profile-3.jpg"
import "./Comments.css"

export default function Comments() {
    return ( 
        <section className="comments">
            <img src={decoration} className="decoration"></img>
            <div className="comment-cont">
                <p className="comment">Fylo has imporved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className="comment-info">
                    <div className="comment-img">
                        <img src={profile1}></img>
                    </div>
                    <div className="comment-user">
                        <p className="name-title">Satish Patel</p>
                        <p className="company-title">Founder &amp; C.E.O, Huddle</p>
                    </div>
                    
                </div>
            </div>
            <div className="comment-cont">
                <p className="comment">Fylo has imporved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className="comment-info">
                    <div className="comment-img">
                        <img src={profile2}></img>
                    </div>
                    <div className="comment-user">
                        <p className="name-title">Bruce McKenzie</p>
                        <p className="company-title">Founder &amp; C.E.O, Huddle</p>
                    </div>
                    
                </div>
            </div>
            <div className="comment-cont">
                <p className="comment">Fylo has imporved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
                <div className="comment-info">
                    <div className="comment-img">
                        <img src={profile3}></img>
                    </div>
                    <div className="comment-user">
                        <p className="name-title">Iva Boyd</p>
                        <p className="company-title">Founder &amp; C.E.O, Huddle</p>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}