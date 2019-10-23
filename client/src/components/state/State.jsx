// react imports
import React, {useState, useEffect} from 'react';

// axios
import axios from 'axios';

// components
import Map from '../Map';
import TrailCard from '../trail/TrailCard'

export default function State({props}){
    let id = props.match.params.id;
    let [trailsArr, setTrailsArr] = useState([])
    let [stateObj, setStateObj] = useState({})

    const getStateInfo = async () => {
        let query = `/api/states/${id}`
        let response = await axios.get(query);
        let {state, trails} = response.data;
        setStateObj({...state})
        setTrailsArr([...trails])
    }
    // let stateInfo;
    // let {city, state, lat, lon} = stateInfo;
    // console.log(stateInfo);
    // const getTrailsArr = async () => {
    //     let response = await axios.get(`/cities/${id}`)
    // }
    useEffect(() => {
        getStateInfo()
    }, [])
    return(
        <div className='state'>
            {/* <Map info={{stateInfo}} model={'state'} /> */}
            <div className='state-info'>
                <div className='state-city'>{stateObj.city}</div>
                <div className='state-state'>{stateObj.state}</div>
                <div className='state-lat'>{stateObj.latitude}</div>
                <div className='state-lon'>{stateObj.longitude}</div>
            </div>
            <div className='state-trails-list'>
                {trailsArr.map((trailObj, idx) => {
                    console.log(trailObj);
                    return <TrailCard trailObj={trailObj} key={`trail-${idx}`} />
                })}
            </div>
        </div>
    )
}