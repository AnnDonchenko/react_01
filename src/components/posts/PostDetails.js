import {useEffect, useState} from "react";
import {getPost} from "../../services/API";

export default function PostDetails (props){
    // let {match:{params:{id}}} = props;
    let {location: {state}} = props;

    const [post, setPost] = useState({});

    // useEffect(()=>{
    //     getPost(id).then(value => setPost({...value.data}));
    // },[id]);
    useEffect(()=>{
        setPost({...state});
    },[state]);

    return (
        <div className={'post-details'}>
            <h2>Post Detail:</h2>
            <p><span>Title - </span>{post.title}</p>
            <p><span>Body - </span>{post.body}</p>
            <p>Post was wrote by user with id - <span>{post.userId}</span></p>
        </div>
    );
}