import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function CityList(){

    // get list of all cities from backend
    const getAllCities = async () => {
        let query = `/cities`;
        let cityList = await axios.get(query);
    }
    const displayAllCities = (cities)
    return(
        <div className='city-list'>

        </div>
    )
}
