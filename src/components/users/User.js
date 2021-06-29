import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import PostsForUser from "../posts/PostsForUser";
import './Users.css';

export default function User ({user}){
    return (
        <Router>
            <p className={'user-name'}>{user.name}</p>
            <Link to={'/users/' + user.id + '/posts'}>Show posts</Link>

            <Switch>
                <Route path={'/users/' + user.id + '/posts'} render={()=><PostsForUser userID={user.id}/>}/>
            </Switch>
        </Router>
    );
}