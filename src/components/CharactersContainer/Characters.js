import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {characterService} from "../../services";
import {Character} from "./Character";
import {UseAppContext} from "../hoc";

const Characters = () => {
    const[characters, setCharacters]=useState([]);
    const {ids} = useParams();
    const navigate = useNavigate();
    const [, setName] = UseAppContext();

    useEffect(() => {
        characterService.getByIds(ids).then(({data})=> setCharacters(data))
    }, [ids])

    const back = () => {
        navigate(-1)
        setName(null)
    }

    return (
        <div>
            <button onClick={back}>back</button>
            {characters.map(character=><Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};