
import PostsForUser from "../postsForUser/PostsForUser";
import {useState} from "react";

export default function User ({item:{id, name, username, email, address, phone, website, company}}){

    let [hideBtn, setHideBtn] = useState('');
    // let hideBtn = 'active';
    function activeFunc(){
        setHideBtn('hide');
    }
    return (
        <div>
            <h2>{name} <i>{username}</i></h2>
            <button id={'hide-posts-btn'} onClick={activeFunc}>Hide All Posts</button>
            <div className={hideBtn + " posts"} >
                <PostsForUser id={id}/>
            </div>
            <hr/>
        </div>
    );
}