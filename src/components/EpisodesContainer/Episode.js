import React from 'react';
import css from './episode.module.css'
import {useNavigate} from "react-router-dom";
import {UseAppContext} from "../hoc";


const Episode = ({episode}) => {
    const{id, name, episode: chapter, characters} = episode;
    const navigate = useNavigate();
    const [, setName]=UseAppContext();

    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',')
        console.log(ids);
        setName(name);
        navigate(`/character/${ids}`)
    }

    return (
        <div className={css.episode} onClick={toCharacters} >
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>chapter: {chapter}</div>
            <br/>
            <br/>
        </div>
        </div>
    );
};

export {Episode};