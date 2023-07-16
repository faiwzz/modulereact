import React, {useContext} from 'react';
import {Context} from "../../../App";

const SubChild22 = () => {
    let {setData} = useContext(Context);
    return (
        <div>
            SubChild22
            <button onClick={()=>setData(prev=>[...prev, 5])}>push5</button>
        </div>
    );
};

export default SubChild22;