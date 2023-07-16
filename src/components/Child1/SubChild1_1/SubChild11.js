import React, {useContext} from 'react';
import {Context} from "../../../App";



const SubChild11 = () => {
    let {data} = useContext(Context);
    return (
        <div>
            {data.map(item=><div key={item}>{item}</div> )}
        </div>
    );
};

export default SubChild11;