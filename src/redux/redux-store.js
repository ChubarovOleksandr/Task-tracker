import { legacy_createStore as createStore, combineReducers } from 'redux'
import taskReducer from './task-reducer'


let reducers =  combineReducers({
    task: taskReducer,
})

let store = createStore(reducers)

export default store;