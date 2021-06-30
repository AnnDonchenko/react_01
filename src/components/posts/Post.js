import {useEffect, useState} from "react";
import CommentsForPost from "../comments/CommentsForPost";

export default function Post ({post}){
    const [postID, setPostID] = useState(null);
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <div className={'post-item'}>
                <div className={'post-inner'}>
                    <p className={'post-id'}>{post.id}</p>
                    <p className={'post-title'}>{post.title}</p>
                    <p className={'post-body'}>{post.body}</p>
                    <button className={'btn'} onClick={()=> {
                        setPostID(post.id);
                        toggle ? setToggle(false) : setToggle(true)
                    }}>Show Comments</button>
                </div>
                {
                    postID && toggle && <CommentsForPost postID={postID}/>
                }
            </div>
        </div>
    );
}