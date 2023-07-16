import React from 'react';

const UserAddress = ({address}) => {
    let {street, city} = address;
    return (
        <div>
            <div>street: {street}</div>
            <div>city: {city}</div>
        </div>
    );
};

export default UserAddress;