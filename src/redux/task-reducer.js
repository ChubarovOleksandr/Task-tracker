const ADD_TASK = 'ADD_TASK'

let initialState = {
    tasks: [
        {id: 0, tEH: 14, tEM: '00', tSH: 12, tSM: 30, taskName: "Watch TV"}
    ]
}

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            let currentTasks = [...state.tasks];
            let newTask = {...action.taskInfo, id: currentTasks.length}  
            currentTasks.push(newTask)                                               
            return {...state, tasks: currentTasks};                                  
        default:
            return state;
    }
}

export const addTask = (data) => ({type: ADD_TASK, taskInfo: data});

export default taskReducer;