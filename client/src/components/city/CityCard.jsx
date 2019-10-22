import React from 'react';
export default function CityCard({city}){
    let {name, state, lat, lon, imgSmall, id} = city;
    return(
        <div className='city'>
            <a className='city-url' href={`/cities/${id}`} >{name}</a>
            <div className='city-state'>{state}</div>
            <div className='city-lat'>{lat}</div>
            <div className='city-lon'>{lon}</div>
            <a className='city-img-url' href={`${id}`} ><img className='city-img' src={imgSmall} /></a>
        </div>
    )
}