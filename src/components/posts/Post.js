import {useEffect, useState} from "react";
import CommentsForPost from "../comments/CommentsForPost";

export default function Post ({post}){
    const [postID, setPostID] = useState(null);

    return (
        <div>
            <p>{post.id} - {post.title}</p>
            <button onClick={()=>setPostID(post.id)}>Show Comments</button>
            {
                postID && <CommentsForPost postID={postID}/>
            }
        </div>
    );
}