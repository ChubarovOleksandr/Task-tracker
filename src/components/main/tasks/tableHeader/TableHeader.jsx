import React from 'react';
import m from '../../Main.module.css'

const TableHeader = () => {
    return (
        <div className={m.first__line}>
            <div className={m.first__column}>
                <div className={m.left__part}>
                <input className={m.time__inputs} type="number" placeholder='12' />
                :
                <input className={m.time__inputs} type="number" placeholder='00' />
                </div>
                -
                <div className={m.right__part}>
                <input className={m.time__inputs} type="number" placeholder='18' />
                :
                <input className={m.time__inputs} type="number" placeholder='00' />
                </div>
            </div>
            <div className={m.second__column}>
                <textarea className={m.name__inputs} name="task-name" maxLength={80} cols="30" rows="1" placeholder='Enter a task name...'></textarea>
            </div>
            <div className={m.third__column}>
                <img src="add.png" className={m.add_icon} alt="true" />
            </div>
        </div>
    );
}

export default TableHeader;