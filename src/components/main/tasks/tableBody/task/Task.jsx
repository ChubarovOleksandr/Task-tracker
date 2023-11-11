import React, { useState } from 'react';
import '../../../Main.css'

let Task = (props) => {

    let [isDone, setIsDone] = useState(false);

    let taskDone = `table__line ${isDone ? 'done' : ''}`

    return <div className={taskDone}>
        <div className={'time__column'}>
            <div className={'left__part'}>
                <span className={'time__spans'}>{props.timeStartHour}</span>
                :
                <span className={'time__spans'}>{props.timeStartMinute === null ? '00' : props.timeStartMinute}</span>
            </div>
            -
            <div className={'right__part'}>
                <span className={'time__spans'}>{props.timeEndHour}</span>
                :
                <span className={'time__spans'}>{props.timeEndMinute === null ? '00' : props.timeEndMinute}</span>
            </div>
        </div>
        <div className={'name__column'}>
            <p className={'task__name inProgress'}>{props.taskName}</p>
        </div>
        <div className={'buttons__column'}>
            <button><img className={'done_icon'} onClick={()=> setIsDone(true)} src="done.png" alt="done-icon" /></button>
            <button><img className={'edit_icon'} src="edit.png" alt="edit-icon" /></button>
            <button><img className={'delete_icon'} src="delete.png" alt="delete-icon" /></button>
        </div>
    </div>
}

export default Task;