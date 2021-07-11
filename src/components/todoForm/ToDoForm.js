import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ToDoList from "../todoList/ToDoList";

export default function ToDoForm (){
    const [todoTitle, setTodoTitle] = useState('');
    const [todoBody, setTodoBody] = useState('');
    const {todos} = useSelector((state) => state.todoReducer)
    const dispatch = useDispatch();

    const addToDoItem = (e) => {
        e.preventDefault();
        let randID = Math.round(Math.random()*100);
        dispatch({type: 'ADD_TODO', payload: todoTitle, id: randID, body: todoBody});
        setTodoTitle('');
        setTodoBody('');
    }
    const onChangeTitle = (e) => {
        setTodoTitle(e.target.value);
    }
    const onChangeBody = (e) => {
        setTodoBody(e.target.value);
    }
    return (
        <div className={'todo-div'}>
            <form className={'form'} onSubmit={addToDoItem}>
                <input type="text" name="title" onChange={onChangeTitle} value={todoTitle}/>
                <input type="text" name="body" onChange={onChangeBody} value={todoBody}/>
                <button type="submit">Add</button>
            </form>
            <ToDoList todos={todos}/>
        </div>
    );
}