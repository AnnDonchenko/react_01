import {useEffect, useState} from "react";
import {getUsers} from "../../services/API";
import User from "./User";
import {Route, Switch} from "react-router-dom";
import UserDetails from "./UserDetails";
import './Users.css';

export default function Users (){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers([...value.data]));
    },[]);
    return (
        <div>
            <h2>All Users:</h2>
            <div className="users">
                {
                    users.map(value => <User key={value.id} user={value}/>)
                }
            </div>
            <Switch>
                <Route path={'/users/:id'} component={UserDetails}/>
            </Switch>
        </div>
    );
}