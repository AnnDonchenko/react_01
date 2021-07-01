import {useEffect, useState} from "react";
import {getUser} from "../../services/API";

export default function UserDetails (props){
    let {match:{params:{id}}} = props;

    const [user, setUser] = useState({});
    const [address, setAddress] = useState({});

    useEffect(()=>{
        getUser(id).then(value => setUser({...value.data}));
        console.log(user);
    },[id]);

    return (
        <div className={'user-details'}>
            <h2>User Details:</h2>
            <p><span>Name</span>{user.name}</p>
            <p><span>Username</span>{user.username}</p>
            <p><span>email</span>{user.email}</p>
            <p>Address:</p>
            <p><span>City</span>{user.address && user.address.city}</p>
            <p><span>Street</span>{user.address && user.address.street}</p>
            <p><span>Suite</span>{user.address && user.address.suite}</p>
            <p><span>Zipcode</span>{user.address && user.address.zipcode}</p>
            <p><span>Geo</span>{user.address && user.address.geo.lat}; {user.address && user.address.geo.lng}</p>
            <p><span>Phone</span>{user.phone}</p>
            <p><span>Website</span>{user.website}</p>
            <p>Company:</p>
            <p><span>Company name</span>{user.company && user.company.name}</p>
            <p><span>Company catch phrase</span>{user.company && user.company.catchPhrase}</p>
            <p><span>Company bs</span>{user.company && user.company.bs}</p>

        </div>
    );
}
