import {useEffect, useState} from "react";

export default function Comment ({comment}){
    return (
        <div className={'comment-item'}>
            <p>Comment for Post #{comment.postId}</p>
            <p><span>User`s email -</span>{comment.email}</p>
            <p><span>Title - </span>{comment.name}</p>
            <p><span>Body - </span>{comment.body}</p>
        </div>
    );

    // "postId": 1,
    //     "id": 1,
    //     "name": "id labore ex et quam laborum",
    //     "email": "Eliseo@gardner.biz",
    //     "body": "lauda
}