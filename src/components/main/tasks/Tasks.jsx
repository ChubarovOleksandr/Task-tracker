import React, { useState } from 'react';
import m from '../Main.module.css'

let Tasks = (props) => {

    let [task, setTask] = useState([])

    return (
        <div className={m.tasks__table}>
            <div className={m.table__body}>
                <div className={m.first_line}>
                    
                </div>
            </div>
        </div>
    );
}
 
export default Tasks;