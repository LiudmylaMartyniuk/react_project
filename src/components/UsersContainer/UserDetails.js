import React from 'react';
import {useNavigate} from "react-router-dom";
// import {useNavigate} from "react-router-dom";

const UserDetails = ({userDetails}) => {
    const {id, name, username, email, address:{street, suite, city, zipcode, geo:{lat, lng}},
        phone, website, company:{cname, catchPhrase, bs}}=userDetails;

    const navigate = useNavigate();
    console.log(navigate);

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>address:
                <div>street: {street}</div>
                <div>suite: {suite}</div>
                <div>city: {city}</div>
                <div>zipcode: {zipcode}</div>
                <div>geo:
                    <div>lat: {lat}</div>
                    <div>lng: {lng}</div>
                </div>
            </div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>company:
                <div>cname: {cname}</div>
                <div>catchPhrase: {catchPhrase}</div>
                <div>bs: {bs}</div>
                <button onClick={() => navigate('posts')}>Posts of the current user</button>
                <hr/>
            </div>
        </div>
    );
};

export default UserDetails;