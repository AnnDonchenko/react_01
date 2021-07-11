import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getPhotos} from "../../services/API";
import Photo from "./Photo";

export default function Photos() {
    const photos = useSelector((state) => state.photos);
    const dispatch = useDispatch();

    useEffect(() => {
        getPhotos().then(value => dispatch({
            type: 'SET_PHOTOS',
            payload: [...value.data]
        }));
    }, [dispatch]);
    return (
        <div>
            <h2>Photos</h2>
            <div className={'photos'}>
                {photos.map(value => <Photo key={value.id} photo={value}/>)}
            </div>
        </div>
    );
}