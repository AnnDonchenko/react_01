import './App.css';
import {useEffect, useState} from 'react';
import {getUsers, getPosts, getComments} from './connection/API';
import Users from './components/users/Users';
import Posts from './components/posts/Posts';

function App() {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect( () => {
       getUsers().then(value => setUsers([...value.data]))
    },[]);

    // useEffect( () => {
    //     getPosts().then(value => setPosts([...value.data]))
    // },[]);
    //
    // useEffect(()=>{
    //     getComments().then(value=> setComments([...value.data]))
    // },[])

    const showPosts = (id) => {
        getPosts(id).then(value => setPosts([...value.data]));
    }

    const showComments = (id) =>{
        getComments(id).then(value => setComments([...value.data]));
    }

  return (
    <div className={'wrap'}>
        <h1>This lesson_02 branch</h1>
        <Users users={users} showPosts={showPosts} posts={posts} showComments={showComments} comments={comments}/>
    </div>
  );
}

export default App;