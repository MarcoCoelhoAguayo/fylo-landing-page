import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import logo from "./images/logo.svg"
import "./Footer.css"

export default function Footer() {

    const locationIcon = <FontAwesomeIcon icon={faLocationDot}/>
    const facebookIcon = <FontAwesomeIcon icon={faFacebookF} />
    const twitterIcon = <FontAwesomeIcon icon={faTwitter} />
    const instagramIcon = <FontAwesomeIcon icon={faInstagram}/>
    const phone = <FontAwesomeIcon icon={faPhone} />
    const mail = <FontAwesomeIcon icon={faEnvelope} />

    return (
        <footer>
            <div className="form">
                <h2>Get early access today</h2>
                <p>It only takes a minute up and our free starter tier is extremel generous. If you have any questions, our support team would be happy to help you.</p>
                <form>
                    <input type="email" placeholder="example@email.com"></input>
                    <button>Get Started For Free</button>
                </form>  
            </div>
            <img className="footer-logo" src={logo}></img>
            <div className="footer-info">
                <div className="info1">
                    <span className="location-icon icon">{locationIcon}</span>
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándarhref</p>
                </div>
                <div className="info2">
                    <span className="phone icon">{phone}</span>
                    <p>044 33 1428 8357</p>
                    <span className="icon">{mail}</span>
                    <p>Mail@gmail.com</p>
                </div>
                <div className="info3">
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                </div>
                <div className="info4">
                    <span className="social-icon">{facebookIcon}</span>
                    <span className="social-icon">{twitterIcon}</span>
                    <span className="social-icon">{instagramIcon}</span>
                </div>
            </div>
        </footer>
    )
}