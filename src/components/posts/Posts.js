import {useEffect, useState} from "react";
import {getPosts} from "../../connection/API";
import Post from "./Post";
import './Posts.css';

export default function Posts (){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts().then(value => setPosts([...value.data]));
    },[]);

    return (
        <div className={'content posts'}>
            {
                posts.map(value => <Post key={value.id} post={value}/>)
            }
        </div>
    );
}