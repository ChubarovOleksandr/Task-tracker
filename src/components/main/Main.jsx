import React, { useState, useEffect } from 'react';
import m from './Main.module.css'
import Tasks from './tasks/Tasks';

let Main = () => {

    let [time, setTime] = useState(new Date());

    //update time by every second

    useEffect(() => {
        let intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId)
    }, [])

    //add zero if number < 10

    let addZero = (number) => {
        return number < 10 ? '0' + number : number;
    }

    let date = {
        hours: time.getHours(),
        minutes: time.getMinutes(),
        second: time.getSeconds()
    }

    for (let elem in date) {
        date[elem] = addZero(date[elem]);
    }

    //formatting date

    let currentTime = `${date.hours}:${date.minutes}:${date.second}`

    return ( 
        <div className={m.main}>
            <div className={m.time_block}>
                <span>{currentTime}</span>
            </div>
            <Tasks currentTime={currentTime}/>
        </div>
     );
}
 
export default Main;