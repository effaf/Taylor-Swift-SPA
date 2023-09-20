import { Drawer,List,ListItem,ListItemButton } from "@mui/material";
import React from "react";

import {scroller} from 'react-scroll';

const SideDrawer = (props) => {

    const sideMenuItems = [
        {where:'onHome', name:"Home"},
        {where:'onEvents',name:"Event"},
        {where:'onHighlights', name:"Highlights"},
        {where:'onPricing', name:"Pricing"},
        {where:'onDirection', name:"Direction"},

    ]

    const scrollToElement = (element)=>{
        scroller.scrollTo(element,{
            duration:1500,
            delay:100,
            smooth:true,
            offset:-150
        });
        props.closeDrawer(false);

    }

    const renderItems = (item) => (
        <ListItemButton onClick={()=> scrollToElement(item.where)} key={item.where}>
            {item.name}
        </ListItemButton>
        )

    return(
        <Drawer
            anchor="right"
            open={props.open}
            onClose={()=> props.closeDrawer(false)}
        >
        <List component = "nav">

            {sideMenuItems.map((item) => renderItems(item))}
                
        </List>

        </Drawer>
    )
}

export default SideDrawer;