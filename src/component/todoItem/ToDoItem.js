import {useDispatch} from "react-redux";
import {delToDo, changeToDoStatus} from "../../services/API";
import {delTodo, changeTodoStatus} from "../../redux/actionCreators";

export default function ToDoItem({item}) {
    let dispatch = useDispatch();

    const delItem = (id) => {
        delToDo(id).then(value => dispatch(delTodo(id)));
    }
    const changeItemStatus = (id, compl) => {
        changeToDoStatus(id, compl).then(value => dispatch(changeTodoStatus({id, compl})))
    }
    return (
        <div>
            <div>Title: {item.title}</div>
            <div>Description: {item.description}</div>
            <div>Date: {new Date(item.createdAt).toDateString()}</div>
            <div className={'status'}>
                <div>Status: {item.completed.toString()}</div>
                <button onClick={() => changeItemStatus(item.id, !item.completed)}>change</button>
            </div>
            <button onClick={() => delItem(item.id)}>delete</button>
            <hr/>
        </div>
    );
}