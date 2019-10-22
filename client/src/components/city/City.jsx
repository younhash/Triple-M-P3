// react imports
import React, {useState} from 'react';

// axios
import axios from 'axios';

// components and seeds
import Map from '../Map';
import {cities} from '../seedcity';

export default function City({}){
    let [trailsArr, setTrailsArr] = useState([])
    let cityInfo = cities[0]
    let {name, state, lat, lon} = cityInfo;
    console.log(cityInfo);
    // const getTrailsArr = async () => {
    //     let response = await axios.get(`/cities/${id}`)
    // }
    
    return(
        <div className='city'>
            <Map info={{cityInfo}} model={'city'} />
            <div className='city-name'>{name}</div>
            <div className='city-state'>{state}</div>
            <div className='city-lat'>{lat}</div>
            <div className='city-lon'>{lon}</div>
        </div>
    )
}