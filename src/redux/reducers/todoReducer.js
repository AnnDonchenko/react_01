import {
    ADD_TODO,
    PUSH_TODO,
    LOADING_TRUE,
    LOADING_FALSE
} from '../actionTypes';

const initialState = {
    todos: [],
    todoLoading: true
}
export const todoReducer = (state=initialState,action) => {
    console.log(action);
    switch (action.type){
        case ADD_TODO:
            return {...state, todos: action.payload}
        case PUSH_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case LOADING_TRUE:
            return {...state, todoLoading: true}
        case LOADING_FALSE:
            return {...state, todoLoading: false}
        default:
            return state;
    }
}