export default function PostDetails ({items}){
    return (
    <div className={'post-details'}>
        <p><b>{items.title}</b></p>
        <p>{items.body}</p>
    </div>
    );
}