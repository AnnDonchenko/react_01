import {useEffect, useState} from "react";
import {getUsers} from "../../serv/API";
import User2 from "./User2";

export default function Users2 (){
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers([...value.data]));
    },[]);
    return (
        <div className={'users row'}>
            {
              users.map(value => <User2 key={value.id} user={value}/>)
            }
        </div>
    );
}