import React from 'react';
import {ToDos} from "../components/ToDosContainer/ToDos";
import {Outlet} from "react-router-dom";

const ToDosPage = () => {
    return (
        <div>
            <ToDos/>
            <Outlet/>
        </div>
    );
};

export default ToDosPage;