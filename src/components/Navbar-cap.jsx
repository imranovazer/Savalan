import React from "react";
import Logo from "../imgs/Logo.png"
export default function NavbarCap()
{
    return(
        <div className="Navbar-cap">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            
            <div className="cap-navigation">
                <span>ABOUT US</span>
                <div className="divider"></div>
                <span>PRODUCTS</span>
                <div className="divider"></div>
                <span>TOURS & WINE SHOP</span>
                <div className="divider"></div>
                <span>EVENTS</span>
                <div className="divider"></div>
                <span>SAVALAN BLOG</span>
            </div>

        </div>
    ) ;
}