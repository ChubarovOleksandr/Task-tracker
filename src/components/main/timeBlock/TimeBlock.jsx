import React from 'react';
import  '../Main.css'

const TimeBlock = (props) => {
    return (
    <div className={'time_block'}>
        <span>{props.currentTime}</span>
    </div> );
}
 
export default TimeBlock;