import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getPosts} from "../../services/API";

export default function Posts (){
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    useEffect(()=>{
        getPosts().then(value => dispatch({
            type: 'SET_POSTS',
            payload: [...value.data]
        }));
    },[]);
    return (
        <div>
            <h2>Posts</h2>
            {posts.map(value => <p key={value.id}>{value.title}</p>)}
        </div>
    );
}