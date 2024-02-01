import React from 'react';

const Character = ({simpson}) => {
    const {name, surname, age, info, photo} = simpson;
    return (
        <div>
            <h1>{name}</h1>
            <p>{surname}</p>
            <p>{age}</p>
            <p>{info}</p>
            <img
                src={photo}
                alt={name}
            />
        </div>
    );
};

export default Character;