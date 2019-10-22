import React, {useState} from 'react';
export default function Search({fxns, search}){
    const {searchChange} = fxns;
    
    const searchSubmit = (e) => {e.preventDefault()}
    

    // search query functions
    /*
    const searchAll = async () => {
        let query = `/cities`;
        let cityList = await axios.get(query);
    }
    const searchTrails = async () => {
        let query = `/cities`;
        let cityList = await axios.get(query);
    }
    const searchCities = async () => {
        let query = `/cities`;
        let cityList = await axios.get(query);
    }
    */

    return(
        <div className='search'>
            <form onSubmit={searchSubmit}>
                <input onChange={searchChange} value={search} ></input>
                <button >Search</button>
            </form>
        </div>
    )
}