import React, {createContext, useState} from 'react';
import Child1 from "./components/Child1/Child1";
import Child2 from "./components/Child2/Child2";

export let Context = createContext(null);
const App = () => {
    let [data, setData] = useState([1,2,3]);
    return (
        <Context.Provider value={{data, setData}}>
        <div>
          <Child1/>
            <Child2/>
        </div>
        </Context.Provider>
    );
};
export default App;