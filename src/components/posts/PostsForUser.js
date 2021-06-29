import {useEffect, useState} from "react";
import {getUserPosts} from "../../connection/API";

export default function PostsForUser ({userID}){
    const [postsForUser, setPostsForUser] = useState([]);
    useEffect(()=>{
        getUserPosts(userID).then(value => setPostsForUser([...value.data]))
    },[])
    return (
        <div>
            {
            postsForUser.map(value => <p>{value.title}</p>)
            }
        </div>
    );
}