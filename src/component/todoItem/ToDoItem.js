import {useDispatch} from "react-redux";
import {delToDo, changeToDoStatus} from "../../services/API";
import {delTodo, changeTodoStatus} from "../../redux/actionCreators";

export default function ToDoItem({item}) {
    let dispatch = useDispatch();

    const delItem = (id) => {
        delToDo(id).then(value => dispatch(delTodo(id)));
    }
    const changeItemStatus = (id, comleted) => {
        changeToDoStatus(id, comleted).then(value => dispatch(changeTodoStatus()))
        // changeToDoStatus(id, comleted).then(value => console.log(value))
    }
    return (
        <div>
            <div>Title: {item.title}</div>
            <div>Description: {item.description}</div>
            <div>Creation Date: {new Date(item.createdAt).toDateString()}</div>
            <div>Status: {item.completed.toString()}</div>
            <button onClick={() => changeItemStatus(item.id, true)}>true</button>
            <button onClick={() => delItem(item.id)}>delete</button>
            <hr/>
        </div>
    );
}