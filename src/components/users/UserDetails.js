import {useEffect, useState} from "react";
import {getUser} from "../../services/API";

export default function UserDetails (props){
    let {match:{params:{id}}} = props;

    const [user, setUser] = useState([]);

    useEffect(()=>{
        getUser(id).then(value => setUser({...value.data}));
    },[id]);

    return (
        <div>
            User {id} - {user.name}
        </div>
    );
}
