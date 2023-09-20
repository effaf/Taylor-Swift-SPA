import React, {useCallback, useEffect, useState} from "react";
import { Slide } from "react-awesome-reveal";

let initialTime = {
        days:'0',
        hours:'0',
        minutes:'0',
        seconds:'0'

}

const TimeUntil = () =>{

    const [eventOver, setEventOver] = useState(false);
    const [time,setTime] = useState(initialTime)

    const getTimeUntil = useCallback((deadline)=>{

        if(eventOver){
            return;
        }

        const timeLeft = Date.parse(deadline) - Date.parse(new Date());
        if(timeLeft < 0){
            setEventOver(true);
            setTime(initialTime);
            return;
        }else{ 
            const seconds = Math.floor((timeLeft/1000)%60);
            const minutes = Math.floor((timeLeft/1000/60)%60);
            const hours = Math.floor((timeLeft/(1000*60*60))%24);
            const days = Math.floor((timeLeft/(1000*60*60*24)));
            setTime({days,hours,minutes,seconds});
        }

    },[eventOver])

    useEffect(()=>{
        const intervalId = setInterval(()=> getTimeUntil('Jan,20,2024,01:20:00'),1000)
        return ()=> clearInterval(intervalId)
    },[getTimeUntil])


    const renderItems = (timeRem,value)=>{
        return(
            <div className="countdown_item">
                <div className="countdown_time">
                    {timeRem}
                </div>
                <div className="countdown_tag">
                    {value}
                </div>
            </div>
        )
    }

    return (
        <Slide triggerOnce>
            <div className="countdown_wrapper">
                {!eventOver ? 
                    <div className="countdown_top">
                    Event starts in
                    </div> 
                    :
                <div>
                    <span style={{
                        background: '#d93d00',
                        fontSize: '19px',
                        padding: '10px',
                        display: 'inline-flex',
                        textTransform: 'uppercase'
                    }}>This event is over</span>
                </div>
                }
                
                
                <div className="countdown_bottom">
                        {renderItems(time.days,'days')}
                        {renderItems(time.hours,'hours')}
                        {renderItems(time.minutes,'minutes')}
                        {renderItems(time.seconds,'seconds')}
                </div>
            </div>
        </Slide>
    
    )
}
export default TimeUntil;