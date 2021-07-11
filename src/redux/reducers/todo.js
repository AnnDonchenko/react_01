const initialStates = {
    todos: []
}
export const todoReducer = (state = initialStates, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state, todos: [...state.todos, {title: action.payload, id: action.id, body: action.body}]};
        case 'DEL_TODO':
            return {...state, todos: [...state.todos.filter(value => value.id !== action.payload)]}
    default:
        return state;
    }
}