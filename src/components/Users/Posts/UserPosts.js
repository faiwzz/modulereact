import React, {useEffect, useState} from 'react';
import Post from "./Post/Post";

const UserPosts = ({userId}) => {
    let [userPosts, setUserPosts] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(res=>res.json())
            .then(userPosts=>setUserPosts(userPosts))
    },[userId])
    return (
        <div>
            {userPosts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {UserPosts};