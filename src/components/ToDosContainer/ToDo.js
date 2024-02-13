import React from "react";

const ToDo = ({todo}) => {
    const {userId, id, title, completed} = todo;
    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>completed: {String(completed)}</div>
            <hr/>
        </div>
    );
};

export {ToDo};