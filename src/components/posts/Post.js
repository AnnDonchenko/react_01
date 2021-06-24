export default function Post ({items,showPostInfo}){
    return (
    <div className={"post-item"}>
        <p>{items.id} - {items.title}</p>
        <div>
            <button onClick={
                ()=>showPostInfo(items.id)
            }>Show more</button>
        </div>
    </div>
    );
}