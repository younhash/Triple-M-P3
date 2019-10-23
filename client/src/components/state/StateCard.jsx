import React from 'react';

export default function StateCard({stateObj}){
    let {state, lat, lon, id} = stateObj;
    
    return(
        <div className='state'>
            <a className='state-url' href={`/states/${id}`} >{state}</a>
            <div className='state-lat'>{lat}</div>
            <div className='state-lon'>{lon}</div>
        </div>
    )
}