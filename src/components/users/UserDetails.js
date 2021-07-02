import {useEffect, useState} from "react";
import {getUser} from "../../services/API";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone, faEnvelope, faUserAlt, faMousePointer, faMapMarkerAlt, faBuilding} from '@fortawesome/free-solid-svg-icons';

export default function UserDetails(props) {
    let {match: {params: {id}}} = props;
    const [user, setUser] = useState({});

    useEffect(() => {
        getUser(id).then(value => setUser({...value.data}));
        console.log(user);
    }, [id]);

    return (
        <div className={'user-details'}>
            <h2>User <span>{user.name}</span> Details:</h2>
            <div className={'user-details-wrap'}>
                <div>
                    <p><span className={'icon'}><FontAwesomeIcon icon={faUserAlt}/></span>{user.username}</p>
                    <p><span className={'icon'}><FontAwesomeIcon icon={faEnvelope}/></span>{user.email}</p>
                    <p><span className={'icon'}><FontAwesomeIcon icon={faPhone}/></span>{user.phone}</p>
                    <p><span className={'icon'}><FontAwesomeIcon icon={faMousePointer}/></span>{user.website}</p>
                </div>
                <div className={'user-details-adress'}>
                    <p><span className={'icon'}><FontAwesomeIcon icon={faMapMarkerAlt}/></span></p>
                    <div>
                        <p><span>City</span>{user.address && user.address.city}</p>
                        <p><span>Street</span>{user.address && user.address.street}</p>
                        <p><span>Suite</span>{user.address && user.address.suite}</p>
                        <p><span>Zipcode</span>{user.address && user.address.zipcode}</p>
                        <p>
                            <span>Geo</span>{user.address && user.address.geo.lat}; {user.address && user.address.geo.lng}
                        </p>
                    </div>
                </div>
                <div className={'user-details-company'}>
                    <p><span className={'icon'}><FontAwesomeIcon icon={faBuilding}/></span></p>
                    <div>
                        <p><span>Company name</span>{user.company && user.company.name}</p>
                        <p><span>Company catch phrase</span>{user.company && user.company.catchPhrase}</p>
                        <p><span>Company bs</span>{user.company && user.company.bs}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
