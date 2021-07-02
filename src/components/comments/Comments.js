import {useEffect, useState} from "react";
import {getComments} from "../../services/API";
import Comment from "./Comment";
import './Comments.css';

export default function Comments (){
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        getComments().then(value => setComments([...value.data]));
    },[]);
    return (
        <div className={'comments'}>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
}