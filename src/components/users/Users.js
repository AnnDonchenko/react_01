import User from './User';
import Posts from "../posts/Posts";

export default function Users ({users, showPosts ,showComments, posts, comments}){
    return (
    <div>
        {
            users.map((value, index)=> <User key={index} user={value} showPosts={showPosts}
                                             posts={posts} showComments={showComments} comments={comments}/>)
        }


    </div>
    );
}