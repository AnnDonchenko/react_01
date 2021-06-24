import Post from "../posts/Post";

export default function UserDetails ({user, filterPosts}){
    return (
    <div className={'user-details'}>
        <p>{user.name}</p>
        <p>{user.username}</p>
        <p>{user.email}</p>
        <p>User`s Posts:</p>
        <ol>
            {
                filterPosts.map(value => <li>{value.title}</li>)
            }
        </ol>

    </div>
    );
}