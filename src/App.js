import React, {useEffect, useState} from 'react';
import Users from "./Components/Users/Users";

const App = () => {
    let [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(users=>setUsers(users))
    }, [])
    return (
        <div>
          <Users users={users}/>
        </div>
    );
};

export default App;