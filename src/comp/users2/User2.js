import {useEffect, useState} from "react";
import {Link, Route, Switch} from "react-router-dom";
import UserPosts2 from "./UserPosts2";

export default function User2 ({user}){
    // console.log(props);
    // let {user, match: {params: {id}}} = props;
    // let {match: {params: {id}}} = props;
    // let flag = id === user.id;

    return (
        <div>
            <div>{user.name}</div>
            <Link to={'/users2/' + user.id + '/posts'}>Show user`s posts</Link>
            <Switch>
                {/*<Route path={'/users2/' + user.id +  '/posts'} component={UserPosts2}/>*/}
                <Route path={'/users2/' + user.id +  '/posts'} render={()=><UserPosts2 id={user.id}/>}/>
            </Switch>
            <hr/>
        </div>
    );
}