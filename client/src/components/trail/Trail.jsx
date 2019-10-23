// react imports
import React, {useState} from 'react';

// axios
import axios from 'axios';

// components
import Map from '../Map';
import EditTrail from './EditTrail';

// seeds
import {trails} from '../seedtrails';

export default function Trail({}){
    let [trailPointsArr, setTrailPointsArr] = useState([])
    let trailInfo = trails[0]
    let {name, city, state, latitude, longitude, imgMedium} = trailInfo;
    console.log(trailInfo);
    // const getTrailPointsArr = async () => {
    // }
    return(
        <div className='trail'>
            <img className='trail-img' src={imgMedium} />
            <Map info={{trailInfo}} model={'trail'} />
            <div className='trail-name'>{name}</div>
            <div className='trail-location'>{city}, {state}</div>
            <div className='trail-lat'>{latitude}</div>
            <div className='trail-lon'>{longitude}</div>
        </div>
    )
}