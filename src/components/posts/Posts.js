import Post from './Post';

export default function Posts ({items, showComments}){
    return (
        <div>
            {
                items.map((value, index) => <Post key={index} items={value} showComments={showComments}/>)
            }
        </div>
    );
}