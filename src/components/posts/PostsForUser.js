import {useEffect, useState} from "react";
import {getUserPosts} from "../../connection/API";

export default function PostsForUser ({userID}){
    const [postsForUser, setPostsForUser] = useState([]);
    useEffect(()=>{
        getUserPosts(userID).then(value => setPostsForUser([...value.data]))
    },[])
    return (
        <div className={'list'}>
            {
                postsForUser.map(value => <p key={value.id}>{value.id} - {value.title}</p>)
            }
        </div>
    );
}