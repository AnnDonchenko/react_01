import Posts from "../posts/Posts";

export default function User ({item:{id, name, username, email, address, phone, website, company}}){
    return (
        <div>
            <h2>{name} <i>{username}</i></h2>
            <div className="posts">
                <Posts id={id}/>
            </div>
            <hr/>
        </div>
    );
}