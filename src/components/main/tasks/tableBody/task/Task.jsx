import m from '../../../Main.module.css'

let Task = (props) => {

    return <div className={m.table__line}>
        <div className={m.time__column}>
            <div className={m.left__part}>
                <span className={m.time__spans}>{props.timeStartHour}</span>
                :
                <span className={m.time__spans}>{props.timeStartMinute}</span>
            </div>
            -
            <div className={m.right__part}>
                <span className={m.time__spans}>{props.timeEndHour}</span>
                :
                <span className={m.time__spans}>{props.timeEndMinute}</span>
            </div>
        </div>
        <div className={m.name__column}>
            <p className={m.task__name + ' ' + m.inProgress}>{props.taskName}</p>
        </div>
        <div className={m.buttons__column}>
            <button>Done</button>
            <button>Change</button>
            <button>Delete</button>
        </div>
    </div>
}

export default Task;