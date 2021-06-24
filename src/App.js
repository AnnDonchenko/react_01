import './App.css';
import {useEffect, useState} from 'react';
import {getUsers, getPosts} from './connection/API';
import Users from './components/users/Users';

function App() {

    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [userPosts, setUserPosts] = useState([]);

    useEffect( () => {
       getUsers().then(value => setUsers([...value.data]))
    },[]);

    useEffect( () => {
        getPosts().then(value => setPosts([...value.data]))
    },[]);

    const showPosts = (id) => {
        getPosts().then(value => setPosts([...value.data]));
        let filter = posts.filter(value => value.userId === id);
        setUserPosts(filter);
    }


  return (
    <div className={'wrap'}>
        <h1>This lesson_02 branch</h1>
        <Users items={users} showPosts={showPosts} userPosts={userPosts}/>
    </div>
  );
}

export default App;