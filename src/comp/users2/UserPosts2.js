import {useEffect, useState} from "react";
import {getUserPosts} from "../../serv/API";

export default function UserPosts2 ({id}){
    const [userPosts, setUserPosts] = useState([]);
    useEffect(()=>{
        getUserPosts(id).then(value => setUserPosts([...value.data]));
    },[id]);
    return (
        <div>
            {userPosts.map(value => <p key={value.id}>{value.title}</p>)}
        </div>
    );
}