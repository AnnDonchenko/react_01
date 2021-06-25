import Comments from '../comments/Comments';
import {useState} from 'react';

export default function Post ({items, showComments}){
    const [userCommentsArr, setUserCommentsArr] = useState([]);
    return (
    <div>
        <p>{items.id} - {items.title}</p>
        <button onClick={()=>{
            setUserCommentsArr(showComments(items.id))
        }}>Show Comments</button>
        <Comments items={userCommentsArr} showComments={showComments}/>
    </div>
    );
}