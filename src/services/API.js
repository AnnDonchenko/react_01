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

const delToDo = async (id) => {
    const response = await fetch('http://localhost:8888/delete-todo/' + id, {
        method: 'DELETE',
    })
    await response.json();
}

const changeToDoStatus = async (id, completed) => {
    const response = await fetch('http://localhost:8888/update-todo/' + id, {
        method: 'PATCH',
        body: JSON.stringify(completed)
    })
    const data = await response.json();
    console.log(data)
    return data;
}

export {getToDos, setToDo, delToDo, changeToDoStatus}