import {Route, Switch} from "react-router-dom";
import Users from "../component/users/Users";
import Posts from "../component/posts/Posts";
import Counter from "../component/counter/Counter";
import Comments from "../component/comments/Comments";

export default function Routes (){
    return (
        <Switch>
            <Route path={'/counter'} component={Counter}/>
            <Route path={'/users'} component={Users}/>
            <Route path={'/posts'} component={Posts}/>
            <Route path={'/comments'} component={Comments}/>
        </Switch>
    );
}