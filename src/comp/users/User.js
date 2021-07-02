import {useEffect, useState} from "react";
import {Link, Route, Switch} from "react-router-dom";
import UserPosts from "./UserPosts";

export default function User ({user}){

    return (
        <div>
            <div>{user.name}</div>
            <Link to={'/users/' + user.id + '/posts'}>Show user`s posts</Link>
        </div>
    );
}