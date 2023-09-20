import React from "react";
import { Zoom } from "react-awesome-reveal";

import icon_calendar from '../../../src/resources/images/icons/calendar.png'
import icon_location from '../../../src/resources/images/icons/location.png'

const VenueInfo = ()=>{
    return(
       <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">
                    
                    <Zoom triggerOnce className="vn_item">
                        <div className="vn_outer">
                            <div className="vn_inner">
                            <div className="vn_icon_square bck_red"></div>
                            <div className="vn_icon" 
                                style={{background:`url(${icon_calendar})`}}>
                            </div>
                            <div className="vn_title">Event Date & Time</div>
                            <div className="vn_desc">Dec 20<br></br>
                                @9:00pm</div>
                            </div>

                        </div>
                    </Zoom>
                    <Zoom triggerOnce className="vn_item" delay={500}>
                        <div className="vn_outer">
                            <div className="vn_inner">
                            <div className="vn_icon_square bck_yellow"></div>
                            <div className="vn_icon" 
                                style={{background:`url(${icon_location})`}}>
                            </div>
                            <div className="vn_title">Event location</div>
                            <div className="vn_desc">28 Redbud Road, Piscataway NJ</div>
                            </div>

                        </div>
                    </Zoom>
                </div>
            </div>
       </div>
    )
}

export default VenueInfo;