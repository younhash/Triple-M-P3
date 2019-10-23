import React from 'react';

export default function UserCard({userObj}){
    let {alias} = userObj;

    return(
        <div className='user-card' key={`userobj-${userObj.id}`} >
            <div>{alias}</div>
        </div>
    )
}