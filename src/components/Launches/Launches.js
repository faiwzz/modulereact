import React, {useEffect, useState} from 'react';
import Launch from "./Launch/Launch";

const Launches = () => {
    let [launches, setLaunches] = useState([]);
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(res=> res.json()).then(launches =>{
                let filtered = launches.filter(item=>item.launch_year!=='2020');
         setLaunches(filtered)})
    }, []);
    return (
        <div>
            {launches.map(launch=><Launch key={Launch.launch_date_unix} launch={launch}/>)}
        </div>
    );
};

export default Launches;