import React, {useEffect, useState} from 'react';
import Post from "./post/post";

const Posts = () => {
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(posts =>setPosts(posts))
        }
    , [])
    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};