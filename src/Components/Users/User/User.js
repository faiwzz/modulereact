import React from 'react';
import UserAddress from "../UserAddress/UserAddress";
import UserDetails from "../UserDetails/UserDetails";
import Company from "../Company/Company";

const User = ({user}) => {
    let {id, name, username, email, address, company} = user;
    return (
        <div>
            <UserAddress address={address}/>
            <UserDetails data={{id, name, username, email}}/>
            <Company company={company}/>
        </div>
    );
};

export default User;