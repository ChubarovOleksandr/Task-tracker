import React from 'react';
import Task from './task/Task';

const TableBody = (props) => {

    let task = props.tasks.map
    (t => <Task timeStartHour={t.tSH} timeStartMinute={t.tSM} 
                timeEndHour={t.tEH} timeEndMinute={t.tEM} 
                taskName={t.taskName} id={t.id} key={t.id}/>)

    return (
        <>
            {task}
        </>
    );
}

export default TableBody;