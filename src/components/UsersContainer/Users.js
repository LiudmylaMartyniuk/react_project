import React from 'react';
import User from "./User";
import axios from "axios";
import {apiService} from "../../services/apiService";
import {urls} from "../../constants/urls";
import {userService} from "../../services/userService";

const Users = ({users}) => {
    return (
        <div>
            {users.map(user => <User key = {user.id} user = {user}/>)}
        </div>
    );
};

export default Users;