import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ToDoList from "../todoList/ToDoList";

export default function ToDoForm (){
    const [todoTitle, setTodoTitle] = useState('');
    const {todos} = useSelector((state) => state.todoReducer)
    const dispatch = useDispatch();

    const addToDoItem = (e) => {
        e.preventDefault();
        let randID = Math.round(Math.random()*100);
        dispatch({type: 'ADD_TODO', payload: todoTitle, id: randID});
        setTodoTitle('');
    }
    const onChange = (e) => {
        setTodoTitle(e.target.value);
    }
    return (
        <div className={'todo-div'}>

            <form className={'form'} onSubmit={addToDoItem}>
                <input type="text" name="title" onChange={onChange} value={todoTitle}/>
                <button type="submit">Add</button>
            </form>
            <ToDoList todos={todos}/>
        </div>
    );
}