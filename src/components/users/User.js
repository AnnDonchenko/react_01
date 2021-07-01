import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function User ({user}){
    return (
        <div className={'user-item'}>
            <p>{user.name}</p>
            <Link to={'/users/' + user.id}>User details</Link>
        </div>
    );
}