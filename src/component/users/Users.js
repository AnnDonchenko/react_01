import {useEffect} from "react";
import {getUsers} from "../../services/API";
import {useDispatch, useSelector} from "react-redux";

export default function Users() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    // const fetchData = async () => {
    //     const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const data = await resp.json();
    //     dispatch({type: 'SET_USERS', payload: data})
    // }

    useEffect(() => {
        // fetchData()
        getUsers().then(value => dispatch({
            type: 'SET_USERS',
            payload: [...value.data]
        }));
    }, []);

    return (
        <div>
            <h2>Users</h2>
            {users.map(value => <p key={value.id}>{value.name}</p>)}
        </div>
    );
}