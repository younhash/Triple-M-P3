// react imports
import React, {useState} from 'react';

// axios
import axios from 'axios';

// components and seeds
import Map from '../Map';

export default function State({}){
    let [trailsArr, setTrailsArr] = useState([])
    let stateInfo;
    let {city, state, lat, lon} = stateInfo;
    console.log(stateInfo);
    // const getTrailsArr = async () => {
    //     let response = await axios.get(`/cities/${id}`)
    // }
    
    return(
        <div className='state'>
            <Map info={{stateInfo}} model={'state'} />
            <div className='state-city'>{name}</div>
            <div className='state-state'>{state}</div>
            <div className='state-lat'>{lat}</div>
            <div className='state-lon'>{lon}</div>
        </div>
    )
}