import React from 'react';
import {Albums} from "../components/AlbumsContainer/Albums";
import {Outlet} from "react-router-dom";

const AlbumsPage = () => {
    return (
        <div>
            <Albums/>
        </div>
    );
};

export default AlbumsPage;