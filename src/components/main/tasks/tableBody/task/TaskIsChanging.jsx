import React, { useRef, useState} from 'react';
import { validate } from '../../tableHeader/validate';
import '../../../Main.css';

const TaskIsChanging = (props) => {

    let timeStart = useRef({
        hours: props.timeStartHour,
        minutes: props.timeStartMinute
    })

    let timeEnd = useRef({
        hours: props.timeEndHour,
        minutes: props.timeEndMinute
    })

    let [taskName, setTask] = useState(props.taskName);

    let onSubmite = () => {
        let response = validate(timeStart, timeEnd, taskName, props.addZero);

        if (isNaN(response)) {
            props.changeTask({...response, id: props.id});
        }
    }

    return (
        <div className={'table__line'}>
            <div className={'time__column'}>
                <div className={'left__part'}>
                    <input className={'time__inputs'}
                        type="number"
                        placeholder={timeStart.current.hours}
                        maxLength={2}
                        onChange={(e) => timeStart.current.hours = e.target.value} />
                    :
                    <input className={'time__inputs'}
                        type="number"
                        placeholder={timeStart.current.minutes}
                        maxLength={2} 
                        onChange={(e) => timeStart.current.minutes = e.target.value}/>
                        
                </div>
                -
                <div className={'right__part'}>
                    <input className={'time__inputs'}
                        type="number" placeholder={timeEnd.current.hours}
                        maxLength={2} 
                        onChange={(e) => timeEnd.current.hours = e.target.value}/>
                    :
                    <input className={'time__inputs'}
                        type="number"
                        placeholder={timeEnd.current.minutes}
                        maxLength={2} 
                        onChange={(e)=> timeEnd.current.minutes = e.target.value} />
                </div>
            </div>
            <div className={'name__column'}>
                <textarea className={'name__inputs'}
                    name="task-name" 
                    maxLength={80} 
                    cols="75" 
                    rows="1"
                    placeholder={taskName} 
                    onChange={(e)=>setTask(e.target.value)}>
                </textarea>
            </div>
            <div className={'buttons__column'}>
                <button>
                    <img src="edit.png" className={'edit_icon'} onClick={onSubmite} alt="edit"  />
                </button>
            </div>
        </div>
    );
};

export default TaskIsChanging;
