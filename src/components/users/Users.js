import User from './User';
import Posts from "../posts/Posts";

export default function Users ({items, showPosts ,showComments, posts, comments}){
    return (
    <div>
        {
            items.map((value, index)=> <User key={index} item={value} showPosts={showPosts}
                                             posts={posts} showComments={showComments} comments={comments}/>)
        }


    </div>
    );
}