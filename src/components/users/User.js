import PostsForUser from "../posts/PostsForUser";
import './Users.css';
import {useState} from "react";

export default function User ({user}){
    const [userID, setUserID] = useState(null);
    return (
        <div>
            <p className={'user-name'}>{user.name}</p>
            <button onClick={()=>setUserID(user.id)}>Show posts</button>
            {userID && <PostsForUser userID={userID}/>}
        </div>
    );
}