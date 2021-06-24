import './App.css';
import './components/users/Users.css';
import './components/posts/Posts.css';

import {useEffect, useState} from "react";
import {getUser, getUsers, getPosts, getPost} from "./services/Api";
import Users from "./components/users/Users";
import UserDetails from "./components/users/UserDetails";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/posts/PostDetails";

function App() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);
    useEffect(()=>{
        getUsers().then(value => setUsers([...value.data]));
    },[]);
    function showUserInfo(id){
        console.log(id)
        getUser(id).then(value => setUser(value.data))
    }
    // ---------------------------------------------------- //
    const [posts, setPosts] = useState([]);
    const [post, setPost] = useState([]);

    useEffect(()=>{
        getPosts().then(value => setPosts([...value.data]));
    },[]);

    function showPostInfo(id){
        getPost(id).then(value => setPost(value.data));
    }

    return (
    <div>
        <h1>This homework_02 branch</h1>
        {/*<div className="wrap">*/}
        {/*    <Users key={1} items={users} showUserInfo={showUserInfo}/>*/}
        {/*    <UserDetails items={user}/>*/}
        {/*</div>*/}

        <div className="wrap">
            <Posts items={posts} showPostInfo={showPostInfo}/>
            <PostDetails items={post}/>
        </div>
    </div>
  );
}

export default App;
