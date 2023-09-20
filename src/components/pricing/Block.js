import React from "react";
import MyButton from "../utils/MyButton";

const Block = (props) =>{
    return (
        <div className="pricing_inner_wrapper">
                <div className="pricing_title">
                    <span>${props.data.price}</span>
                    <span>{props.data.location}</span>
                </div>
                <div className="pricing_description">
                    <p>{props.data.desc}</p>
                </div>
                <div className="pricing_buttons">
                    <MyButton text="Purchase ticket" link={props.data.linkto} style={{backgroundColor:'#ffa800'}}/>
                </div>
            </div>
    )
}

export default Block;