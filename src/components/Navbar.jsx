import React from "react";
import "../styles/style.scss"


export default function Navbar()
{
    return(
        <div className="Navbar">
            <div className="navbar-text-logo">LUXURY OF SAVALAN</div>
            <div className="navbar-elements">
                <a href="#">Contact us</a>
                <a href="#">Follow us</a>
                <a href="#">Find us</a>
                <div className="change-lang">
                EN<span class="material-symbols-outlined">expand_more</span>
                </div>
            </div>
        </div>
    ) ;
}