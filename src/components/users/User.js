import PostsForUser from "../posts/PostsForUser";
import './Users.css';

export default function User ({user}){
    return (
        <div>
            <p className={'user-name'}>{user.name}</p>
            {/*<button onClick={()=>{}}>Show posts</button>*/}

            <PostsForUser userID={user.id}/>}/>
        </div>
    );
}