import React from 'react';
export default function CityCard({trailObj}){
    console.log('trailobj',trailObj);
    
    let {name, city, state, latitude, longitude} = trailObj;
    return(
        <div className='trail'>
            <div className='trail-name'>{name}</div>
            <div className='trail-state'>{state}</div>
            <div className='trail-city'>{city}</div>
            <div className='trail-lat'>{latitude}</div>
            <div className='trail-lon'>{longitude}</div>
        </div>
    )
}