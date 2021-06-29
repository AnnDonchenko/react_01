import Posts from '../posts/Posts';
import {useState} from 'react';
import {getPosts} from "../../connection/API";

export default function User ({user, showPosts, showComments, posts, comments}){
    const [userPostsArr, setUserPostsArr] = useState([]);
    // const [posts, setPosts] = useState([]);
    return (
    <div className={'user-item'}>
        <h4>{user.id} - {user.name}</h4>
        <button onClick={()=>{
            setUserPostsArr(showPosts(user.id));

            // getPosts(item.id).then(value => setPosts([...value.data]));
            console.log(user.id);
        }}>Show posts</button>

        <Posts posts={posts} showComments={showComments} comments={comments}/>
    </div>
    );
}