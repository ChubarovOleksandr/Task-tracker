const TaskDone = (props) => {
    return (
        <div className={'table__line done'}>
            <div className={'time__column time__column_task'}>
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
                <button className='close__button'> <img className={'close_icon'} onClick={() => props.updateTaskStatus({ action: 'done', id: props.id, status: false })} src="close.png" alt="close-icon" /> </button>
                <button> <img className={'edit_icon'} onClick={() => props.updateTaskStatus({ action: 'isChanging', id: props.id, status: true })} src="edit.png" alt="edit-icon" /> </button>
                <button> <img className={'delete_icon'} onClick={() => props.deleteTask(props.id)} src="delete.png" alt="delete-icon" /> </button>
            </div>
        </div>
    );
}

export default TaskDone;