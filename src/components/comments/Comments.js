import {useEffect, useState} from "react";
import {getComments} from "../../connection/API";
import Comment from "./Comment";
import './Comments.css'
export default function Comments (){
    const [comments, setComments] = useState([]);
    useEffect(()=>{
        getComments().then(value => setComments([...value.data]));
    },[]);

    return (
        <div className={'content comments'}>
            {
                comments.map(value => <Comment key={value.id} comment={value}/>)
            }
        </div>
    );
}