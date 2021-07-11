import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getComments} from "../../services/API";
import Comment from "./Comment";

export default function Comments (){
    const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();

    useEffect(()=>{
        getComments().then(value => dispatch({
            type: 'SET_COMMENTS',
            payload: [...value.data]
        }));
    },[dispatch]);
    return (
        <div>
            <h2>Comments</h2>
            {comments.map(value=><Comment key={value.id} comment={value}/>)}
        </div>
    );
}