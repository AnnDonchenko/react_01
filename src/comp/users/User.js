import {Link} from "react-router-dom";

export default function User({user}) {

    return (
        <div className={'user col-md-3'}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{user.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                    <Link className={'btn btn-secondary'} to={'/users/' + user.id + '/allposts'}>Show user`s posts</Link>
                </div>
            </div>
        </div>
    );
}