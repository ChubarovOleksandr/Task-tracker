import React, { useRef } from 'react';
import m from '../../Main.module.css'
import { validate } from './validate';

const TableHeader = (props) => {

    let timeStart = useRef({
        hours: null,
        minutes: null
    })

    let timeEnd = useRef({
        hours: null,
        minutes: null
    })

    let taskName = useRef('');

    let onSubmite = () => {
        let response = validate(timeStart, timeEnd, taskName.current, props.addZero);
        
        if (isNaN(response)) {
            props.addTask(response);
        }
    }
    
    return (
        <div className={m.table__line}>
            <div className={m.time__column}>
                <div className={m.left__part}>
                    <input className={m.time__inputs} 
                            onChange={(e) => timeStart.current.hours = +e.target.value} 
                            type="number" 
                            placeholder='12' 
                            maxLength={2} />
                    :
                    <input className={m.time__inputs} 
                            onChange={(e) => timeStart.current.minutes = +e.target.value} 
                            type="number" 
                            placeholder='00' 
                            maxLength={2} />
                </div>
                -
                <div className={m.right__part}>
                    <input  className={m.time__inputs} 
                            onChange={(e) => timeEnd.current.hours = +e.target.value} 
                            type="number" placeholder='18' 
                            maxLength={2} />
                    :
                    <input  className={m.time__inputs} 
                            onChange={(e) => timeEnd.current.minutes = +e.target.value} 
                            type="number" 
                            placeholder='00' 
                            maxLength={2} />
                </div>
            </div>
            <div className={m.name__column}>
                <textarea className={m.name__inputs}
                          onChange={(e) => taskName.current = e.target.value}
                          name="task-name" 
                          maxLength={80} 
                          cols="30" 
                          rows="1" 
                          placeholder='Enter a task name...'></textarea>
            </div>
            <div className={m.buttons__column}>
                <button onClick={onSubmite}>
                    <img src="add.png" className={m.add_icon} alt="true" />
                </button>
            </div>
        </div>
    );
}

export default TableHeader;