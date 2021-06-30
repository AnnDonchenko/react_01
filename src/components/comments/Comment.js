import {useEffect, useState} from "react";

export default function Comment ({comment}){
    return (
        <div className={'comment-item'}>
            <div><b>{comment.id}</b> - {comment.name}</div>
            <div>{comment.name}</div>
        </div>
    );
}