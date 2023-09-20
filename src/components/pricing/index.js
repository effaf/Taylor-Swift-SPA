import React from "react";
import MyButton from "../utils/MyButton";
import { Zoom } from "react-awesome-reveal";
import Block from './Block';

const Pricing =() => {

    const dataInformation = [{
        price:100,location:"Balcony", desc:"say something random", linkto:"https://gotoA",delay:500},
        {price:150,location:"Medium", desc:"say something random twice", linkto:"https://gotoB",delay:0},
        {price:200,location:"Star", desc:"say something random randomly", linkto:"https://gotoC",delay:500}];

    const renderBlock = (data) => {
        return(
        <Zoom className="pricing_item" delay={data.delay}>
            <Block data = {data} key={data.linkto}/>
        </Zoom>
        )
    }
    return(
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="pricing_section">
                    <h2>Pricing</h2>
                </div>
                <div className="pricing_wrapper">
                    {dataInformation.map((data)=>renderBlock(data))}
                </div>
            </div>
        </div>
    )
}
export default Pricing;