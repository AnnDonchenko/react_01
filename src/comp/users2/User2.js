import {Link, Route, Switch} from "react-router-dom";
import UserPosts2 from "./UserPosts2";

export default function User2({user}) {
    return (
        <div className={'user col-md-5'}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                    <Link className={'btn btn-secondary'} to={'/users2/' + user.id + '/allposts'}>Show user`s posts</Link>
                    <p className="card-text">
                        <Switch>
                            <Route path={'/users2/' + user.id + '/allposts'}
                                   render={() => <UserPosts2 id={user.id}/>}/>
                        </Switch>
                    </p>
                </div>
            </div>
        </div>
    );
}