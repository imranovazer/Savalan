import React from "react";
import FooterLogo from "../imgs/Logo.png"
import data from "../data";
import map from "../imgs/Map.png"
export default function Footer()
{
    return (
        <div className="Footer">
           <div className="footer-logo">
            <img src={FooterLogo} alt="" />
           </div>
           <div className="mail-us">
                <span className="head">
                    Would you like to keep in touch?
                </span>
                <span className="sub-head">
                    Subscribe to the Savalan’s newsletter to receive our latest offers and news.
                </span>
                <div className="text-area">
                    <input type="text" placeholder="Your e-mail address" className="text"/>
                    <input type="submit" className="submit"/>
                </div>
           </div>
           <div className="footer-details">
                <div className="products">
                    <span className="head">PRODUCTS</span>
                    <div className="product-name">
                        <span>WINES</span>
                        <span>+</span>
                    </div>
                    <div className="divider">
                    <div className="product-name">
                        <span>DISTILATTES</span>
                        <span>+</span>
                    </div>
                    <div className="divider"></div>
                    <div className="product-name">
                        <span>COGNAC</span>
                        <span>+</span>
                    </div>
                    </div>

                </div>
                <div className="company">
                    <span className="head">COMPANY</span>
                    <div className="container">
                         {data.company.map(item=>
                        (<span className="company-elemetns">{item} <br/></span>
                        ))}
                    </div>
                   
                </div>
                <div className="contacts">
                    {data.contacts.map(e=>(
                        <div className="section">
                            <span className="head">{e.header}</span>
                            <div className="sub-head">{e.firsrLine}</div>
                            <div className="sub-head">{e.seconLine}</div>
                        </div>

                    ))}
                </div>
                <div className="map">
                        <img src={map} alt="" />
                </div>
           </div>

           <div className="links">
            <div className="container">
                <a href="#"><div className="face"></div></a>
                <a href="#"><div className="inst"></div></a>
                <a href="#"><div className="you"></div></a>
                <a href="#"><div className="lin"></div></a>
            </div>
            
           </div>
           <div className="copyright">
                <div className="shadow">
                </div>

                <div className="background">

                </div>
                <div className="text">
                    COPYRIGHT © 2022 SAVALAN - ASPI Winery
                </div>
           </div>
            
            
        </div>
    ) ;
}