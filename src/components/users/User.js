
import PostsForUser from "../postsForUser/PostsForUser";
import {useState} from "react";

export default function User ({item:{id, name, username, email, address, phone, website, company}}){

    // let hideBtnItem = document.getElementById('hide-posts-btn');
    // let [hideBtn, setHideBtn] = useState(hideBtnItem);

    // console.log(hideBtn);
    // setHideBtn();

    return (
        <div>
            <h2>{name} <i>{username}</i></h2>
            <button id={'hide-posts-btn'}>Hide All Posts</button>
            <div className="posts active">
                <PostsForUser id={id}/>
            </div>
            <hr/>
        </div>
    );
}