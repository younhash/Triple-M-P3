import React from 'react';

export default function StateCard({stateObj}){
    let {city, state, lat, lon, imgSmall, id} = stateObj;
    console.log(stateObj);
    
    return(
        <div className='state'>
            <a className='state-url' href={`/states/${id}`} >{city}</a>
            <div className='state-state'>{state}</div>
            <div className='state-lat'>{lat}</div>
            <div className='state-lon'>{lon}</div>
            <a className='state-img-url' href={`${id}`} ><img className='state-img' src={imgSmall} /></a>
        </div>
    )
}