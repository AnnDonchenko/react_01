import Post from "./Post";

export default function Posts ({items, showPostInfo}){
    return (
    <div className={'posts'}>
        {
            items.map((value,index) => <Post key={index} items={value} showPostInfo={showPostInfo}/>)
        }
    </div>
    );
}