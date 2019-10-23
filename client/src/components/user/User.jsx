import React from 'react';
export default function User({userObj}){
    let {firstName, lastName, alias} = userObj.user;
    return(
        <div className='user'>
        </div>
    )
}