import React from 'react';
import TaskDefault from './task/TaskDefault';
import TaskDone from './task/TaskDone';
import TaskIsChanging from './task/TaskIsChanging';

const TableBody = (props) => {

    let task = props.tasks.map(t => {

        if (t.isChanging === true) {
            return <TaskIsChanging timeStartHour={t.tSH} timeStartMinute={t.tSM}
                timeEndHour={t.tEH} timeEndMinute={t.tEM}
                taskName={t.taskName} id={t.id} key={t.id}
                updateTaskStatus={props.updateTaskStatus} 
                changeTask={props.changeTask}
                addZero={props.addZero}/>
        } else if (t.done === true) {
            return <TaskDone timeStartHour={t.tSH} timeStartMinute={t.tSM}
                timeEndHour={t.tEH} timeEndMinute={t.tEM}
                taskName={t.taskName} id={t.id} key={t.id}
                updateTaskStatus={props.updateTaskStatus}
                deleteTask={props.deleteTask} />
        } else {
            return <TaskDefault timeStartHour={t.tSH} timeStartMinute={t.tSM}
                timeEndHour={t.tEH} timeEndMinute={t.tEM}
                taskName={t.taskName} id={t.id} key={t.id}
                updateTaskStatus={props.updateTaskStatus}
                deleteTask={props.deleteTask} />
        }})

    return (
        <>{task}</>
    );
}

export default TableBody;