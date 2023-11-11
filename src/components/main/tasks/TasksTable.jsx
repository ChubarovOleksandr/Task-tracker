import React from 'react';
import '../Main.css'
import TableHeader from './tableHeader/TableHeader';
import TableBody from './tableBody/TableBody';

let TasksTable = (props) => {
    return (
        <div className={'tasks__wrapper'}>
            <div className={'tasks__table'}>
                <TableHeader addZero={props.addZero} addTask={props.addTask}/>
                <TableBody tasks={props.taskList.tasks}/>
            </div>
        </div>
    );
}

export default TasksTable;