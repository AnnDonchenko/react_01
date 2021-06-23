import './Users.css';
import {useEffect, useState} from "react";
import User from "./User";

export default function Users (){
    let [userList, setUserList] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUserList(value);
            });
    },[]);

    return(
        <div>
            {
                userList.map((value, index)=> <User key={index} item={value}/>)
            }
        </div>
    );
}