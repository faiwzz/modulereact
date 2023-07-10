import React, {useEffect, useState} from 'react';
import User from "./User/User";

const Users = ({setUserId}) => {
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(users=>setUsers(users))
    },
        []);
    return (
        <div>
            {users.map(user=><User key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export {Users};