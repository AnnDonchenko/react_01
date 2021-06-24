export default function UserDetails ({items}){
    return (
    <div className={'user-details'}>
        <p>{items.name}</p>
        <p>{items.username}</p>
        <p>{items.email}</p>
    </div>
    );
}