import React from 'react';
export default function User({cityObj}){
    let {name, state, lat, lon} = cityObj.city;
    return(
        <div className='user'>
        </div>
    )
}