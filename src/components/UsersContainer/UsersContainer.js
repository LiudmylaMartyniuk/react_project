import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import {apiService} from "../../services/apiService";
import {urls} from "../../constants/urls";
import {userService} from "../../services/userService";
import UserForm from "./UserForm";
import Users from "./Users";

const UsersContainer = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        userService.getAll().then(({data}) => setUsers(data))
    }, []);

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export default UsersContainer;