import React from 'react';

const PostDetails = ({post}) => {
    let {id, userId, title, body} = post;
    return (
        <div>
            <hr/>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export default PostDetails;