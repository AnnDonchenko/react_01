import ToDoItem from "../todoItem/ToDoItem";

export default function ToDoList ({todos}){
    return (
        <div className={'todo-list'}>

            {todos.map((value, index)=><ToDoItem key={index} item={value}/>)}
        </div>
    );
}