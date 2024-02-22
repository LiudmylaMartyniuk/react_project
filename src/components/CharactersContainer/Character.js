import React from 'react';
import {useLocation} from "react-router-dom";

const Character = ({character}) => {
    const {id, name, image} = character;
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <img src={image} alt={name}/>
        </div>
    );
};

export {Character};