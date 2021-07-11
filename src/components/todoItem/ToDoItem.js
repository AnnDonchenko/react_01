import {useDispatch} from "react-redux";

export default function ToDoItem({item}) {
    const dispatch = useDispatch();

    const delItem = () =>{
        dispatch({type: 'DEL_TODO', payload: item.id});
    }
    return (
        <div className={'todo-item'}>
            <p className={'id'}>#{item.id}</p>
            <p className={'title'}>title - {item.title}</p>
            <p className={'body'}>body - {item.body}</p>
            <div>
                <button onClick={delItem}>DEL</button>
            </div>
        </div>
    );
}