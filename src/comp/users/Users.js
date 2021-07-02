import {useEffect, useState} from "react";
import {getUsers} from "../../serv/API";
import User from "./User";
import {Route, Switch} from "react-router-dom";
import UserPosts from "./UserPosts";

export default function Users (){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers([...value.data]));
    },[]);
    return (
        <div>
            <div>{
                users.map(value => <User key={value.id} user={value}/>)
            }</div>

            <Switch>
                <Route path={'/users/:id/posts'} component={UserPosts}/>
            </Switch>
        </div>
    );
}