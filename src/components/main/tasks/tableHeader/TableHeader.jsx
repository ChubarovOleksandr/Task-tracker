import React, { useRef } from 'react';
import m from '../../Main.module.css'

const TableHeader = () => {

    let timeStart = useRef({
        hours: null,
        minutes: null
    })

    let timeEnd = useRef({
        hours: null,
        minutes: null
    })

    function validate() {

        if (!!timeStart.current.hours) {
            if (timeStart.current.hours < 0 || timeStart.current.minutes < 0) {
                console.log('В первой дате часы и минуты меньше 0');
            } else if (timeStart.current.hours > 24 || timeStart.current.minutes > 59) {
                console.log('В первой дате часы и минуты больше 24 или 59');
            } else {
                console.log('Первая дата корректна');
            }
        }
        if (!!timeEnd.current.hours && !!timeStart.current.hours) {
            if (timeEnd.current.hours > 24 || timeEnd.current.minutes > 59) {
                console.log('Во второй дате часы и минуты больше 24 или 59!');
            } else if (timeEnd.current.hours < 0 || timeEnd.current.minutes < 0) {
                console.log('Во второй дате часы и минуты меньше 0!');
            } else if (timeStart.current.hours < timeEnd.current.hours) {
                console.log('Первая дата больше второй!');
            } else if (timeStart.current.hours == timeEnd.current.hours && timeStart.current.minutes >= timeEnd.current.minutes) {
                console.log('Часы равны, но минуты неправильны!');
            } else {
                console.log('Вторая дата корректна!');
            }
        }

        /* попробовать 12 12 - 12 12
        12 12   11 12   
        12 12      12
           12   11 12
        11      12 12
           12   10 12
        и по всякому*/

    }

    function resetTime() {
        timeStart.current.hours = null;
        timeStart.current.minutes = null;
        timeEnd.current.hours = null;
        timeEnd.current.minutes = null;
    }

    return (
        <div className={m.first__line}>
            <div className={m.first__column}>
                <div className={m.left__part}>
                    <input className={m.time__inputs} onChange={(e) => timeStart.current.hours = e.target.value} type="number" placeholder='12' maxLength={2} />
                    :
                    <input className={m.time__inputs} onChange={(e) => timeStart.current.minutes = e.target.value} type="number" placeholder='00' maxLength={2} />
                </div>
                -
                <div className={m.right__part}>
                    <input className={m.time__inputs} onChange={(e) => timeEnd.current.hours = e.target.value} type="number" placeholder='18' maxLength={2} />
                    :
                    <input className={m.time__inputs} onChange={(e) => timeEnd.current.minutes = e.target.value} type="number" placeholder='00' maxLength={2} />
                </div>
            </div>
            <div className={m.second__column}>
                <textarea className={m.name__inputs} name="task-name" maxLength={80} cols="30" rows="1" placeholder='Enter a task name...'></textarea>
            </div>
            <div className={m.third__column}>
                <button onClick={() => validate()}>
                    <img src="add.png" className={m.add_icon} alt="true" />
                </button>
            </div>
        </div>
    );
}

export default TableHeader;