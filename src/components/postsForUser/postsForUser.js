import {useEffect, useState} from "react";
import Post from "./Post";

export default function PostsForUser({id}){
    let [postList, setPostList] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPostList(value);
            });
    },[]);

    let filter = postList.filter(value => value.userId === id);

    return(
        <div>
            {
                filter.map((value, index)=> <Post key={index} item={value}/>)
            }
        </div>
    );
}