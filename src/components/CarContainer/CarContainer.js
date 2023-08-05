import React, {createContext, useState} from 'react';
import CarForm from "./CarForm/CarForm";
import Cars from "./Cars/Cars";

export const Context = createContext(null);
const CarContainer = () => {
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);
    return (
        <Context.Provider value={{
            trigger,
            setTrigger:()=>setTrigger(prev=>!prev),
            carForUpdate,
            setCarForUpdate
        }}>
            <div>
                <CarForm/>
                <hr/>
                <Cars/>
            </div>
        </Context.Provider>

    );
};

export default CarContainer;
