import {useEffect, useState} from "react";
import {getCommentsForPost} from "../../connection/API";

export default function CommentsForPost ({postID}){
    const [commentsForPost, setCommentsForPost] = useState([]);
    useEffect(()=>{
        getCommentsForPost(postID).then(value => setCommentsForPost([...value.data]));
    },[]);

    return (
        <div>
            {
                commentsForPost.map(value => <p key={value.id}>{value.id} - {value.name}</p>)
            }
        </div>
    );
}