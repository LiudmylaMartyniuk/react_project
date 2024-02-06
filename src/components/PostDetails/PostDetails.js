import React from 'react';

const PostDetails = ({postDetails}) => {
    const{userId, id, title, body}=postDetails;
    return (
        <div>
            <ul>
                <li>User Id: {userId}</li>
                <li>Id: {id}</li>
                <li>Title: {title}</li>
                <li>Body: {body}</li>
            </ul>
        </div>
    );
};

export default PostDetails;