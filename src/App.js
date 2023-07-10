import React, {useState} from 'react';
import Launches from "./components/Launches/Launches";
import {Users} from "./components/Users/Users";
import {UserPosts} from "./components/Users/Posts/UserPosts";

const App = () => {
    let [userId, setUserId] = useState(null);
    return (
        <div>
          {/*<UserPosts/>*/}
          {/*  <Launches/>*/}
            <Users setUserId={setUserId}/>
            {userId&&<UserPosts userId={userId}/>}
        </div>
    );
};

export default App;