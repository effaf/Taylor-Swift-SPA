import React from "react";

import { Button } from "@mui/material";

import ticketIcon from '../../resources/images/icons/ticket.png';

const MyButton = (props)=>{
    return(
        <div>
            <Button 
            href={props.link} 
            variant="contained" 
            size={props.size?props.size:"large"}
            style={{backgroundColor:'#8e8e8e',
                    color:'#ffffff',
                    ...props.style}}>

            {props.show_icon?
                <img src = {ticketIcon} className="iconImage" alt='ticket button'></img>
            :null}
            {props.text}

            </Button>
            
        </div>
    )
}

export default MyButton;