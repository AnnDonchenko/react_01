import {useEffect, useState} from "react";
import {getPosts} from "../../services/API";
import Post from "./Post";
import {Route, Switch} from "react-router-dom";
import PostDetails from "./PostDetails";
import './Posts.css';

export default function Posts (){
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPosts().then(value => setPosts([...value.data]));
    },[]);
    return (
        <div>
            <h2>All posts:</h2>
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