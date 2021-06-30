import User from "./User";
import {useEffect, useState} from "react";
import {getUsers} from "../../connection/API";

export default function Users (){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers([...value.data]));
    },[]);

    return (
        <div className={'content'}>
            {
                users.map(value => <User key={value.id} user={value}/>)
            }
        </div>
    );
}