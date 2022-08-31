import React from "react";
import "./Header.css"
import logo from "./images/logo.svg"


export default function Header(props) {


    const [activeMenu, setActiveMenu] = React.useState("menu")

    const [burger, setBurger] = React.useState("burger")
  
    function toggleMenu() {
      setActiveMenu(prevActiveMenu => prevActiveMenu === "menu" ? "menu-active" : "menu")
    }
  
    function toggleBurger() {
      setBurger(prevBurger => prevBurger === "burger" ? "toggle" : "burger")
    }


    return (
        <nav className="nav-cont">
            <div className="logo">
                <img src={logo}></img>
            </div>
            <ul className={activeMenu}>
                <li><a href="#">Features</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Sign In</a></li>
            </ul>
            <div className={burger} onClick={function() {toggleMenu(); toggleBurger();}}>
                <div 
                    className="line1"
                ></div>
                <div 
                    className="line2"
                ></div>
                <div 
                    className="line3"
                ></div>
            </div>
        </nav>
    )
}