import {useEffect, useState} from "react";
import Post from "./Post";
import "./Posts.css";

export default function Posts(){
    let [postList, setPostList] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPostList(value);
            });
    },[]);

    return(
        <div className={'wrap'}>
            {
                postList.map((value, index)=> <Post key={index} item={value}/>)
            }
        </div>
    );
}