import React,{useState,useEffect} from "react";
import { Fade,Slide } from "react-awesome-reveal";
import Button from "../utils/MyButton";
import MyButton from "../utils/MyButton";

const Discount = ()=>{

    const end = 30;
    const [start,setTime] = useState(0);

    const percentage = ()=>{
        if(start<end){ 
            setTime(prevCount => prevCount + 1);

        }
    }

    useEffect(()=>{
        if(start > 0 && start<30){
            setTimeout(()=>{
                setTime(prevCount => prevCount + 1);
            },30)
        }
    },[start])

    return(
        <div className="center_wrapper">
            <div className="discount_wrapper">
                <Fade onVisibilityChange={(inView)=>{
                    if(inView){
                        percentage();

                }}}>
                    <div className="discount_porcentage">
                        <span>{start}</span>
                        <span>%</span>
                    </div>
                </Fade>
                <Slide top>
                    <div className="discount_description">
                        <h3>Purchase ticket before</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt nisi commodi eaque ullam amet possimus consequuntur beatae, vero pariatur obcaecati cum voluptatibus vitae porro eligendi.</p>

                        <MyButton 
                        text="Purchase ticket"
                        show_icon={true} />
                    </div>

                    

                </Slide>

            </div>
        </div>
    )
}
export default Discount;