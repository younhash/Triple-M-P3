import React from 'react';

export default function StateCard({stateObj}){
    let {city, state, lat, lon, id} = stateObj;
    
    return(
        <div className='state'>
            <a className='state-url' href={`/states/${id}`} >{city}</a>
            <div className='state-state'>{state}</div>
            <div className='state-lat'>{lat}</div>
            <div className='state-lon'>{lon}</div>
        </div>
    )
}