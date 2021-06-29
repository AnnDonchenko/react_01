import Post from './Post';

export default function Posts ({posts, showComments}){
    return (
        <div>
            {
                posts.map((value, index) => <Post key={index} post={value} showComments={showComments}/>)
            }
        </div>
    );
}