// react imports
import React, {useState} from 'react';

// axios
import axios from 'axios';

// components and seeds
import Map from '../Map';
import {trails} from '../seedtrails';

export default function Trail({}){
    let [trailPointsArr, setTrailPointsArr] = useState([])
    let trailInfo = trails[0]
    let {name, state, lat, lon} = trailInfo;
    console.log(trailInfo);
    const getTrailPointsArr = async () => {
        
    }
    
    return(
        <div className='trail'>
            <Map info={{trailInfo}} model={'trail'} />
            <div className='trail-name'>{name}</div>
            <div className='trail-state'>{state}</div>
            <div className='trail-lat'>{lat}</div>
            <div className='trail-lon'>{lon}</div>
        </div>
    )
}