import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../../services/API";
import Post from "./Post";

export default function Posts (){
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    useEffect(()=>{
        getPosts().then(value => dispatch({
            type: 'SET_POSTS',
            payload: [...value.data]
        }));

    },[dispatch]);
    return (
        <div>
            <h2>Posts</h2>
            {posts.map(value => <Post key={value.id} post={value}/>)}
        </div>
    );
}