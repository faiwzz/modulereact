import React, {useState} from 'react';
import PostDetails from "../postDetails/postDetails";

const Post = ({post}) => {
    let [show, setShow] = useState(false);
    let {id, title} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={()=>setShow(!show)}>{show?'Hide':'Show'}</button>
            {
                show&& <PostDetails post={post}/>
            }
        </div>
    );
};

export default Post;