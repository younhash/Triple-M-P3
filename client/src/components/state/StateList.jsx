import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function StateList(){

    // get list of all cities from backend
    const getAllStates = async () => {
        let query = `/states`;
        let stateList = await axios.get(query);
    }
    const displayAllStates = (states)
    return(
        <div className='state-list'>

        </div>
    )
}
