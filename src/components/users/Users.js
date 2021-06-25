import User from './User';

export default function Users ({items, showPosts ,showComments}){
    return (
    <div>
        {
            items.map((value, index)=> <User key={index} items={value} showPosts={showPosts} showComments={showComments}/>)
        }
    </div>
    );
}