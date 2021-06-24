import User from "./User";

export default function Users ({items, showUserInfo}){
    return (
    <div className={'users'}>
        {
            items.map((value, index) => <User key={index} items={value} showUserInfo={showUserInfo}/>)
        }
    </div>
    );
}