const ADD_TASK = 'ADD_TASK'

let initialState = {
    tasks: [
        {id: 0, tEH: 13, tEM: 13, tSH: 12, tSM: 12, taskName: "Watch TV"}
    ]
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let currentTasks = [...state.tasks];
            let newTask = {...action.taskInfo, id: currentTasks.length, status: 1}   // status - 1: in progress 
            currentTasks.push(newTask)                                               // status - 2: done
            return {...state, tasks: currentTasks};                                  // status - 3: fail
        default:
            return state;
    }
}

export const addTask = (data) => ({type: ADD_TASK, taskInfo: data});

export default taskReducer;