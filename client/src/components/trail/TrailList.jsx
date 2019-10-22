import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TrailCard from './TrailCard';
export default function TrailList({model}){
    const [trailsArr, setTrailsArr] = useState([]);
    const buildTrailsArr = async () => {
        let query = `/api/${model}s/`
        try {
            let response = await axios.get(query);
            setTrailsArr([...response.data]);
        }
        catch (error) {console.log('ERROR', error)}
    }
    useEffect(() => {
        buildTrailsArr();
    },[model])
    return(
        <div className={`${model}-list`} >
            {trailsArr.map((trail, idx) => {
                return <TrailCard trailObj={{trail, model}} key={`${model}-${idx}`} />
            })}
        </div>
    )
}