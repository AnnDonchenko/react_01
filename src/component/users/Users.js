import {useEffect} from "react";
import {getUsers} from "../../services/API";
import {useDispatch, useSelector} from "react-redux";
import User from "./User";

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
    }, [dispatch]);

    return (
        <div>
            <h2>Users</h2>
            {users.map(value => <User key={value.id} user={value}/>)}
        </div>
    );
}