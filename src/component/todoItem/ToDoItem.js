export default function ToDoItem ({item}){
    return (
        <div>
            <div>Title: {item.title}</div>
            <div>Description: {item.description}</div>
            <div>Creation Date: {new Date(item.createdAt).toDateString()}</div>
            <div>Status: {item.completed.toString()}</div>
            <hr/>
        </div>
    );
}