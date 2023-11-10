import React from 'react';
import m from '../Main.module.css'

const TimeBlock = (props) => {
    return (
    <div className={m.time_block}>
        <span>{props.currentTime}</span>
    </div> );
}
 
export default TimeBlock;