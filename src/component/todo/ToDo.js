import ToDoItem from "../todoItem/ToDoItem";

export default function ToDo ({todos, isLoading}){
    // console.log(todos);
    if (isLoading) return <h2>Loading...</h2>
    return (
        <div className={'todo-body'}>
            {
                todos.map(value=><ToDoItem key={value.id} item={value}/>)
            }
        </div>
    );
}