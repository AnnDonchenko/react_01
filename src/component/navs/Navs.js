import {Link} from "react-router-dom";

export default function Navs (){
    return (
        <div className={'nav'}>
            <Link to={'/counter'}>counter </Link>
            <Link to={'/users'}>users </Link>
            <Link to={'/posts'}>posts </Link>
            <Link to={'/comments'}>comments </Link>
            <Link to={'/photos'}>photos </Link>
        </div>
    );
}