import React from 'react';
import Posts from "../components/PostsContainer/Posts";
import {useParams} from "react-router-dom";

const UserPostsPage = () => {
    const {id} = useParams();
    console.log(id);

    return (
        <div>
            <Posts userId={id}/>
        </div>
    );
};

export default UserPostsPage;