// react imports
import React, {useState, useEffect} from 'react';

// axios
import axios from 'axios';

// components
// import Map from '../Map';
import TrailCard from '../trail/TrailCard'

export default function State({props}){
    
    let [trailsArr, setTrailsArr] = useState([])
    let [stateObj, setStateObj] = useState({})

    // let stateInfo;
    // let {city, state, lat, lon} = stateInfo;
    // console.log(stateInfo);
    // const getTrailsArr = async () => {
        //     let response = await axios.get(`/cities/${id}`)
        // }
    let id = props.match.params.id;
    useEffect(() => {
        const getStateInfo = async () => {
            let query = `/api/states/${id}`
            let response = await axios.get(query);
            let {state, trails} = response.data;
            setStateObj({...state})
            setTrailsArr([...trails])
        }
        getStateInfo()
    }, [id]) // now changed to this
    // }, []) // was originally this
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