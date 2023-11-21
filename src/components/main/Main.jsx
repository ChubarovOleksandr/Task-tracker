import React, { useState, useEffect } from 'react';
import './Main.css'
import TasksTable from './tasks/TasksContainer';
import TimeBlock from './timeBlock/TimeBlock';

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
        if(number === null) {
            return number
        }
        return number < 10 && number >= 0 ? '0' + number : number;
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
        <div className={'main'}>
            <TimeBlock currentTime={currentTime} /> 
            <TasksTable currentTime={currentTime} addZero={addZero}/> 
        </div>                              
     ); 
}
 
export default Main;