import { v4 as uuidv4 } from 'uuid';

const ADD_TASK = 'ADD_TASK';
const UPDATE_TASK_STATUS = 'UPDATE_TASK_STATUS';
const DELETE_TASK = 'DELETE_TASK';
const CHANGE_TASK = 'CHANGE_TASK';

let initialState = {
    tasks: [
        
    ]
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let currentTasks = [...state.tasks];
            let newTask = { ...action.taskInfo, id: uuidv4(), done: false, isChanging: false }
            currentTasks.push(newTask)
            return { ...state, tasks: currentTasks };
        case UPDATE_TASK_STATUS:
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.obj.id ? { ...task, [action.obj.action]: action.obj.status } : task
                )
            }
        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.id)
            }
        }
        case CHANGE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.data.id ? { ...action.data } : task
                )
            }
        }
        default:
            return state;
    }
}

export const addTask = data => ({ type: ADD_TASK, taskInfo: data });
export const updateTaskStatus = obj => ({ type: UPDATE_TASK_STATUS, obj });
export const deleteTask = id => ({ type: DELETE_TASK, id });
export const changeTask = data => ({ type: CHANGE_TASK, data })

export default taskReducer;