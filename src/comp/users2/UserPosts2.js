import {useEffect, useState} from "react";
import {getUserPosts} from "../../serv/API";

export default function UserPosts2 ({id}){
    const [userPosts, setUserPosts] = useState([]);
    useEffect(()=>{
        getUserPosts(id).then(value => setUserPosts([...value.data]));
    },[id]);
    return (
        <ol className="user-posts list-group list-group-numbered">
            {userPosts.map(value => <li className="list-group-item" key={value.id}>{value.title}</li>)}
        </ol>
    );
}