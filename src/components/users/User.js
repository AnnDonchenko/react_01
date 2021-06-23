
import PostsForUser from "../postsForUser/PostsForUser";

export default function User ({item:{id, name, username, email, address, phone, website, company}}){
    return (
        <div>
            <h2>{name} <i>{username}</i></h2>
            <div className="posts">
                <PostsForUser id={id}/>
            </div>
            <hr/>
        </div>
    );
}