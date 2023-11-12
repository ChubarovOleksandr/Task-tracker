import React from 'react';
import '../Main.css'
import TableHeader from './tableHeader/TableHeader';
import TableBody from './tableBody/TableBody';

let TasksTable = (props) => {
    return (
        <div className={'tasks__wrapper'}>
            <div className={'tasks__table'}>
                <TableHeader addZero={props.addZero} addTask={props.addTask}/>
                <TableBody tasks={props.taskList.tasks} 
                updateTaskStatus={props.updateTaskStatus} 
                deleteTask={props.deleteTask}
                changeTask={props.changeTask}
                addZero={props.addZero}/>
            </div>
        </div>
    );
}

export default TasksTable;