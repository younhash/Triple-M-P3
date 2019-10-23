// react imports
import React, {useState, useEffect} from 'react';

// axios
import axios from 'axios';

// components
import Map from '../Map';
import EditTrail from './EditTrail';

// seeds
export default function Trail({props}){
    let id = props.match.params.id;
    // let [trailPointsArr, setTrailPointsArr] = useState([]);
    let [trailObj, setTrailObj] = useState({});

    const getTrailInfo = async () => {
        let query = `/api/trails/${id}`;
        let response = await axios.get(query);
        let {trails} = response.data;
        console.log('trail', trails);
        setTrailObj({...trails});
    }
    let {name, city, state, latitude, longitude, imgMedium} = trailObj;
    // console.log(trailInfo);
    // const getTrailPointsArr = async () => {
    // }
    useEffect(() => {
        getTrailInfo()
    }, [])
    return(
        <div className='trail'>
            <img className='trail-img' src={imgMedium} />
            <Map info={{trailObj}} model={'trail'} />
            <div className='trail-name'>{name}</div>
            <div className='trail-location'>{city}, {state}</div>
            <div className='trail-lat'>{latitude}</div>
            <div className='trail-lon'>{longitude}</div>
        </div>
    )
}