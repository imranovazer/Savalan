import React from "react";
import data from "../data";
import "../styles/Slider.scss"
 export default function Slider(props)
 {
    const [ActiveCategory, SetActiveCategory] =React.useState(props.activeCat)
    const InputData = data.categories.find(e=>e.id===ActiveCategory) ;
     function changeCategory(event)
     {
         SetActiveCategory(Number(event.target.id))
         console.log(event.target.id) ;
     }
    return ( <div className="Slider">
            <div className="path">
                <div className="text">
                    Home / Products /<span style={{color:"black"}}>{InputData.heading}</span> 
                    
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
                <hr/>
                
            </div>

            <div className="vines-per-category">
                    <div className="select-vine-type">
                        <span>White wine</span>
                        <span style={{color : "#BBA05A"}}>Red wine</span>
                        <span>Rose</span>
                    </div>
                    <div className="vines-grid">
                        {/* //<div className="wines-container"> */}
                        <div className="vines wines" style={{marginLeft:ActiveCategory===1?"-100%":"0px",height:ActiveCategory===1 && "100px"}}>
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
                        {/* </div> */}
                    </div>
            </div>
        </div>) ;
 }