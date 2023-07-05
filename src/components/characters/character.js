import React from 'react';
import './character.css';
const Character = (props) => {
    let {id,name,status,species,gender,image} = props;
    return (
        <div className={'character'}>
            <h1>{id}: {name}, gender:{gender}</h1>
            <h2>Status:{status}, Species:{species}</h2>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Character;