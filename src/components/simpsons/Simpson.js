import React from 'react';
import './Simpson.css';

const Simpson = (props) => {
    let {name, surname, age, info, photo} = props;
    return (
        <div className={'person'}>
            <h2>{name} {surname}, {age}</h2>
            <h3>{info}</h3>
            <img src={photo} alt={name}/>
        </div>
    );
};

export default Simpson;