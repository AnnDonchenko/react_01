export default function User ({items, showUserInfo}){
    return (
    <div className={'user-item'}>
        <h3>{items.id} - {items.name}</h3>
        <div>
            <button onClick={()=>showUserInfo(items.id)}>See More</button>
        </div>
    </div>
    );
}