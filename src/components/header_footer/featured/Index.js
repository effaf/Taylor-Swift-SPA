import React from "react";
import Caraousel from "./Carousel";
import TimeUntil from "./TimeUntil";

const Featured = () =>{
    return (
        <div className="feature-container">
            <Caraousel/>
            <div className="artist_name">
                <div className="wrapper">
                    Taylor Swift
                </div>
            </div>
            <TimeUntil/>
        </div>
    )
}

export default Featured;