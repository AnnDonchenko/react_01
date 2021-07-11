export default function Photo ({photo}){
    return (
        <div className={'photo-item'}>
            <img src={photo.thumbnailUrl} alt={photo.title}/>
            <p>{photo.id} - {photo.title}</p>
        </div>
    );
}