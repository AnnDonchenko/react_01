import {useEffect} from "react";
import {getUsers} from "../../services/API";
import {useDispatch, useSelector} from "react-redux";

export default function Users() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        getUsers().then(value => dispatch({
            type: 'SET_USERS',
            payload: [...value.data]
        }));

        // let users = [];
        // getUsers().then(value => users = [...value.data]);
        // dispatch({
        //     type: 'SET_USERS',
        //     payload: users,
        // })

    }, []);

    return (
        <div>
            <h2>Users</h2>
            {users.map(value => <p key={value.id}>{value.name}</p>)}
        </div>
    );
}