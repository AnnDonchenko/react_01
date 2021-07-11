import {
    ADD_TODO,
    PUSH_TODO,
    LOADING_TRUE,
    LOADING_FALSE,
    DEL_TODO,
    CHANGE_TODO_STATUS
} from '../actionTypes';

const initialState = {
    todos: [],
    todoLoading: true
}
export const todoReducer = (state=initialState,action) => {
    switch (action.type){
        case ADD_TODO:
            return {...state, todos: action.payload}
        case PUSH_TODO:
            return {...state, todos: [...state.todos, action.payload]}
        case LOADING_TRUE:
            return {...state, todoLoading: true}
        case LOADING_FALSE:
            return {...state, todoLoading: false}
        case DEL_TODO:
            return {...state, todos: [...state.todos.filter(el => el.id !== action.payload)]}
        case CHANGE_TODO_STATUS: {
            return {...state, todos: [...state.todos.map(item=> {
                    if (item.id === action.payload.id) {
                        item.completed = action.payload.compl;
                    }
                    return item;
                })]}
        }
        default:
            return state;
    }
}

// case STATUS_TODO: {
//     let find = state.todos.find(todo => todo.id === action.id);
//     find.completed = !action.completed
//     console.log(find.completed, action.completed)
//     return {...state}
// }