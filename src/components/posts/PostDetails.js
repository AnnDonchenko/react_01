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
        <div>
            {
                post.body
            }
        </div>
    );
}