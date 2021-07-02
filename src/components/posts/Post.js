import {useEffect, useState} from "react";
import {Link} from 'react-router-dom';

export default function Post ({post}){
    return (
        <div className={'post-item'}>
            <p>{post.title}</p>
            <div><Link className={'btn'} to={{
                pathname: '/posts/' +post.id,
                state: post
            }}>Post Details</Link></div>
        </div>
    );
}