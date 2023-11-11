import React, { useState } from 'react';
import m from '../Main.module.css'
import TableHeader from './tableHeader/TableHeader';
import TableBody from './tableBody/TableBody';

let TasksTable = (props) => {

    let [task, setTask] = useState([])

    return (
        <div className={m.tasks__wrapper}>
            <div className={m.tasks__table}>
                <TableHeader addZero={props.addZero} addTask={props.addTask}/>
                <TableBody />
            </div>
        </div>
    );
}

export default TasksTable;