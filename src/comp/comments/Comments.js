import {useEffect, useState} from 'react';
import {getComments} from '../../connect/API';
import Comment from './Comment'

export default function Comments (){
    const [comments, setComments] = useState([]);
    useEffect(()=>{
       getComments().then(value => setComments([...value.data]));
    });

    return (
    <div>
        <h2>Comments</h2>
        {
            comments.map(value => <Comment key={value.id} items={value}/>)
        }
    </div>
    );
}