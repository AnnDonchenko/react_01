import {useEffect, useState} from 'react';
import {getPosts} from '../../connect/API';
import Post from './Post';

export default function Posts (){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        getPosts().then(value => setPosts([...value.data]));
    });

    return (
        <div>
            <h2>Posts</h2>
            {
                posts.map(value=> <Post key={value.id} items={value}/>)
            }
        </div>
    );
}