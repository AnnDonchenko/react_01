import Comments from '../comments/Comments';
import {useState} from 'react';

export default function Post ({post, showComments}){
    const [userCommentsArr, setUserCommentsArr] = useState([]);
    return (
    <div>
        <p>{post.id} - {post.title}</p>
        {/*<button onClick={()=>{*/}
        {/*    setUserCommentsArr(showComments(items.id))*/}
        {/*}}>Show Comments</button>*/}
        {/*<Comments items={userCommentsArr} showComments={showComments}/>*/}
    </div>
    );
}