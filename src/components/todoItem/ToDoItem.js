import {useDispatch} from "react-redux";

export default function ToDoItem({item}) {
    const dispatch = useDispatch();

    const delItem = () =>{
        dispatch({type: 'DEL_TODO', payload: item.id});
    }
    return (
        <div className={'todo-item'}>

            <p className={'title'}>{item.id} - {item.title}</p>
            <div>



                <button onClick={delItem}>DEL</button>
            </div>
        </div>
    );
}