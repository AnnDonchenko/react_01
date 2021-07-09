const getToDos = async () => {
    const resp = await fetch('http://localhost:8888/get-todos');
    const data = await resp.json();
    return data;
}
const setToDo = async (title, description) => {
    const resp = await fetch('http://localhost:8888/create-todo',{
        method: 'POST',
        body: JSON.stringify({title, description}),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = resp.json();
    return data;
}



export {getToDos, setToDo}