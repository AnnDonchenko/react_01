import './App.css';
import ToDoForm from "./component/todoForm/ToDoForm";
import {getToDos, setToDo} from "./services/API";
import {useDispatch, useSelector} from "react-redux";
import ToDo from "./component/todo/ToDo";
import {useEffect} from "react";
import{
    setLoadingFalse,
    setLoadingTrue,
    addTodo,
    pushTodo,
} from './redux/actionCreators';

function App() {
    const {todos, todoLoading} = useSelector(store => store)
    const dispatch = useDispatch();

    const addingTodo = async () => {
        dispatch(setLoadingTrue())
        try {
            await getToDos().then(value => dispatch(addTodo(value)));
        } catch (e){
            console.log(e);
        } finally {
            dispatch(setLoadingFalse())
        }
    }


    useEffect(()=>{
        addingTodo()
    }, []);

    const onToDoCreate = async (title, description) => {
        if (!title || !description) return;
        await setToDo(title, description).then(value => {
            dispatch(pushTodo(value))
        });
    }


    return (
        <div>
            <h1>This is homework_06_redux_todo_v2 branch</h1>
            <div className="wrap">
                <ToDoForm onSubmit={onToDoCreate}/>
                <ToDo todos={todos} isLoading={todoLoading}/>
            </div>
        </div>
    );
}

export default App;
