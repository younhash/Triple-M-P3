import React from 'react';
export default function CityCard({cityObj}){
    let {name, state, lat, lon} = cityObj.city;
    return(
        <div className='city'>
            <div className='city-name'>{name}</div>
            <div className='city-state'>{state}</div>
            <div className='city-lat'>{lat}</div>
            <div className='city-lon'>{lon}</div>
        </div>
    )
}