import './Comments.css';
import Comment from "../comment/Comment";
import React, {useEffect, useState} from "react";

export default function Comments(){

    let [commentList, setCommentList] = useState([]);

    // let state = useState([]);
    // let commentList = state[0];
    // let setCommentList = state[1];

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setCommentList(value);
            });
    }, []);

    return(
        <div className={'wrap'}>
            {
                commentList.map((value, index)=><Comment key={index} item={value}/>)
            }
        </div>
    );
}