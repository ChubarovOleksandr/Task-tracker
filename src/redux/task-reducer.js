const ADD_TASK = 'ADD_TASK'

const taskReducer = (state = null, action) => {
    switch (action.type) {
        case ADD_TASK:
            
            return state;
    
        default:
            return state;
    }
}

export const addTask = (data) => ({type: ADD_TASK, taskInfo: data});

export default taskReducer;