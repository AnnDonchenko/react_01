import Posts from '../posts/Posts';
import {useState} from 'react';

export default function User ({items, showPosts, showComments}){
    const [userPostsArr, setUserPostsArr] = useState([]);

    return (
    <div className={'user-item'}>
        <h4>{items.id} - {items.name}</h4>
        <button onClick={()=>{
            setUserPostsArr(showPosts(items.id));
        }}>Show posts</button>
        <Posts items={userPostsArr} showComments={showComments}/>
    </div>
    );
}