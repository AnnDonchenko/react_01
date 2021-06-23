export default function Post ({item:{userId, id, title, body}}){
    return (
    <div className={'post-item'}>
        <div className={'post-id'}>
            <p>{userId}</p>
            <p>{id}</p>
        </div>
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
    );
}