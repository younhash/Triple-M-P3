import React, {useState} from 'react';
import axios from 'axios';

export default function EditTrail({trailObj, setTrailObj}){
    let [updatedTrailDesc, setUpdatedTrailDesc] = useState(trailObj['summary']);

    // console.log('in edit trail',trailObj);
    const editDescription = (e) => {
        // console.log(e.target.value);
        setUpdatedTrailDesc(e.target.value)
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        // make the call
        let query = `/api/trails/${trailObj.id}/edit`
        let newTrailObj = {...trailObj, 'summary': updatedTrailDesc}
        try {
            let response = await axios.put(query, newTrailObj);
            setTrailObj(newTrailObj)
        } catch (err) {console.log(err)}
    }
    const blurHandler = async (e) => {setTrailObj({...trailObj})}
    let inputElem = <input className='input-update-trail-description' type='text' onChange={editDescription} value={updatedTrailDesc} onBlur={blurHandler} autoFocus />
    
    return(
        <div className='trail-edit'>
            <div className='trail-edit-card' >
                <form onSubmit={submitHandler} >
                    {inputElem}
                </form>
            </div>
        </div>
    )
}