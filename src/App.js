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

    useEffect( () => {
        getPosts().then(value => setPosts([...value.data]))
    },[]);

    useEffect(()=>{
        getComments().then(value=> setComments([...value.data]))
    },[])

    const showPosts = (id) => {
        getPosts().then(value => setPosts([...value.data]));
        let filter = posts.filter(value => value.userId === id);
        return filter;
    }

    const showComments = (id) =>{
        getComments().then(value => setComments([...value.data]));
        let filter = comments.filter(value => value.postId === id);
        return filter;
    }

  return (
    <div className={'wrap'}>
        <h1>This lesson_02 branch</h1>
        <Users items={users} showPosts={showPosts} showComments={showComments}/>
    </div>
  );
}

export default App;