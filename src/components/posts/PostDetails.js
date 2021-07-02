import {useEffect, useState} from "react";
import {getPost} from "../../services/API";

export default function PostDetails (props){
    let {location: {state}} = props;

    const [post, setPost] = useState({});

    useEffect(()=>{
        setPost({...state});
    },[state]);

    return (
        <div className={'post-details'}>
            <h2>Post of User #<span>{post.userId}</span> Detail:</h2>
            <p><span>Title - </span>{post.title}</p>
            <p><span>Body - </span>{post.body}</p>
        </div>
    );
}