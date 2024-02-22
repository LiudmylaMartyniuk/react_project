import React from 'react';
import css from './Header.module.css'
import {UseAppContext} from "../hoc";

const Header = () => {
    const[name, setName] = UseAppContext()
    return (
        <div className={css.Header}>
            {name?
                <h1>{name}</h1>
                :
                <h1>Rick & Morty</h1>
            }

        </div>
    );
};

export {Header};