import React from 'react';
import EditTrail from './EditTrail';
export default function TrailCard({trailObj}){
    console.log('trailobj',trailObj);
    
    let {name, city, state, latitude, longitude, imgSmall, id} = trailObj;
    console.log(imgSmall)
    return(
        <div className='trail'>
            <a className='trail-img-url' href={`/trails/${id}`} ><img className='trail-img' src={imgSmall} /></a>
            <div className='trail-info-container'>
                <div className='trail-url'><a href={`/trails/${id}`} >{name}</a></div>
                <div className='trail-state'>{state}</div>
                <div className='trail-city'>{city}</div>
                <div className='trail-lat'>{latitude}</div>
                <div className='trail-lon'>{longitude}</div>
            </div>
        </div>
    )
}