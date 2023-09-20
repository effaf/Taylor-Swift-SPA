import React from "react";
import { useEffect,useState } from "react";
import {AppBar,Toolbar,IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideDrawer from './SideDrawer'

const Header = () => {

    const [drawerState, setDrawer] = useState(false);
    const [headerShow, setHeaderShow] = useState(false);

    function setDrawerState(value){
        setDrawer(value);
    }

    const handleScroll = () => {
        if(window.scrollY > 0){
            setHeaderShow(true)
        }else{
            setHeaderShow(false)
        }

    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll);
    },[])

    return(
        <AppBar
            style={{
                backgroundColor:headerShow ? '#2f2f2f': "transparent" ,
                boxShadow:'none',
                padding:'10px 0px',
                position: 'fixed'

            }}>
            <Toolbar>
                <div className="header_logo">
                    <div className="font_righteous header_logo_venue">The Venue</div>
                    <div className="header_logo_title">Musical Events</div>
                </div>
                
                <IconButton aria-label="Menu" color="inherit" onClick={()=>setDrawerState(true)}>

                    <MenuIcon/>
                    
                </IconButton>

                <SideDrawer open={drawerState} closeDrawer={(val)=>setDrawerState(val)}/>
                
            </Toolbar>

            

        </AppBar>

    )
}

export default Header;