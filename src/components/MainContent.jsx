import React from "react";
import data  from "../data";

export default function MainContent()
{
    const [ActiveCategory, SetActiveCategory] =React.useState(0)
    const InputData = data.categories.find(e=>e.id===ActiveCategory) ;
    function changeCategory(event)
    {
        SetActiveCategory(Number(event.target.id))
        console.log(event.target.id) ;
    }
    return (
        <div className="MainContent">
            <div className="path">
                <div className="text">
                    Home / Products /<span style={{color:"black"}}>{InputData.heading}</span> 
                    
                </div>
                
            </div>
            <div className="CategoryDiscription">
                    <div className="heading">
                            {InputData.heading}
                    </div>
                    <div className="discription">
                        {InputData.description}
                    </div>
                </div>

            <div className="Buttons">
                <div className="container">
                    {
                        data.categories.map(e=>
                            (
                                <div id={e.id} className={e.id===ActiveCategory?"button active":"button"} onClick={changeCategory}>{e.heading}</div>
                                
                            ))
                    }
                </div>
            </div>
            <div className="divide-line">
                <div className="line"></div>
            </div>

            <div className="vines-per-category">
                    <div className="select-vine-type">
                        <span>White wine</span>
                        <span style={{color : "#BBA05A"}}>Red wine</span>
                        <span>Rose</span>
                    </div>
                    <div className="vines-grid">
                        <div className="vines wines" style={{marginLeft:ActiveCategory===1?"-1300px":"0px"}}>
                            {data.categories[0].elements.map(
                                e=>
                                (
                                    <div className="vine">
                                        <div className="img-container">
                                            <div className="hover">
                                                <div className="discover">
                                                    DISCOVER
                                                </div>
                                            </div>
                                            <img src={e.img}  />
                                        </div>
                                        <div className="vine-name">
                                            {e.name}
                                        </div>

                                    </div>
                                )
                            )}
                        </div>
                        <div className="vines distillates">
                            {data.categories[1].elements.map(
                                e=>
                                (
                                    <div className="vine">
                                        <div className="img-container">
                                            <div className="hover">
                                                <div className="discover">
                                                    DISCOVER
                                                </div>
                                            </div>
                                            <img src={e.img}  />
                                        </div>
                                        <div className="vine-name">
                                            {e.name}
                                        </div>

                                    </div>
                                )
                            )}
                        </div>
                    </div>

            </div>
            <div className="wine-tours">

                        <div className="backgrounfImg">

                        </div>
                        <div className="wineToursText">
                            <div className="header">
                                    WINE TOURS
                            </div>
                            <div className="text1">
                                    Our tours are an ideal alternative for lovers of traditional wine art as well as for everyone who wants to try something new.
                            </div>
                            <div className="text2">
                                    During the tours, the guests visits grape fields and were able to become familiar gradually with all the stages of wine production, the wine vault, laboratory equipped with ultramodern facilities and the museum of wine.
                            </div>
                            <div className="button">
                                DISCOVER OUR TOUR
                            </div>
                        </div>
            </div>
        </div>
    ) ;
    
}