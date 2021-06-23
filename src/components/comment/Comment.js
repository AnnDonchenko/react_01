import './Comment.css';
export default function Comment({item: {postId, id, name, email, body}}){
    return(
        <div className={'comment-item'}>
            <div className={'comment-id'}>
                <p>Comment for {postId} post</p>
                <p>Comment id = {id}</p>
            </div>
            <h2>{name}</h2>
            <p><i>{email}</i></p>
            <p>{body}</p>
        </div>
    );
}