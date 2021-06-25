import Comment from '../comments/Comment';

export default function Comments ({items}){
    return (
    <div>
        <ul>
            {
                items.map((value,index)=> <Comment key={index} items={value}/>)
            }
        </ul>
    </div>
    );
}