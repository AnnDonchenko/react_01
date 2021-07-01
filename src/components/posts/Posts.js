import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "./Post";
import {Route, Switch} from "react-router-dom";
import PostDetails from "./PostDetails";

export default function Posts (){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPosts().then(value => setPosts([...value.data]));
    },[]);
    return (
        <div>
            <div className={'posts'}>
                {
                    posts.map(value => <Post key={value.id} post={value}/>)
                }
            </div>
            <Switch>
                <Route path={'/posts/:id'} component={PostDetails}/>
            </Switch>
        </div>
    );
}