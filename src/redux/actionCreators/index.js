import{
    ADD_TODO,
    PUSH_TODO,
    LOADING_TRUE,
    LOADING_FALSE,
} from '../actionTypes'

export const setLoadingFalse = () => ({type: LOADING_FALSE});
export const setLoadingTrue = () => ({type: LOADING_TRUE});
export const addTodo = (payload) => ({type: ADD_TODO, payload});
export const pushTodo = (payload) => ({type: PUSH_TODO, payload});