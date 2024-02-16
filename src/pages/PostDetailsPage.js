import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Posts from "../components/PostsContainer/Posts";
import {postService} from "../services/postService";
import PostDetails from "../components/PostsContainer/PostDetails";

const PostDetailsPage = () => {
    const [postDetails, setPostDetails] = useState(null);
    const {id} = useParams();


    useEffect(()=>{
        postService.byId(id).then(({data})=>setPostDetails(data))
    }, [id])

    return (
        <div>
            {postDetails && <PostDetails postDetails={postDetails}/>}
        </div>
    );
};

export default PostDetailsPage;