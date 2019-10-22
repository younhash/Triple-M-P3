import React from 'react';

import Map from '../Map';

export default function City({cityInfo}){
    let {name, state, lat, lon} = cityInfo;
    return(
        <div className='city'>
            <div className='city-name'>{name}</div>
            <div className='city-state'>{state}</div>
            <div className='city-lat'>{lat}</div>
            <div className='city-lon'>{lon}</div>
        </div>
    )
}