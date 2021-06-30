import PostsForUser from "../posts/PostsForUser";
import './Users.css';
import {useState} from "react";

export default function User ({user}){
    const [userID, setUserID] = useState(null);
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <div className="user-item">
                <div className="user-inner">
                    <div className={'user-names'}>
                        <p className={'user-name'}>{user.name}</p>
                        <p className={'user-username'}>{user.username}</p>
                    </div>

                    <p className={'user-email'}>{user.email}</p>
                    <button className={'btn'} onClick={()=> {
                        setUserID(user.id);
                        toggle ? setToggle(false): setToggle(true)
                    }}>Show posts</button>
                </div>
                {userID && toggle && <PostsForUser userID={userID}/>}
            </div>
        </div>
    );
}