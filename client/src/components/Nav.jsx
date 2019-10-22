import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

export default function Nav({searchChange, search}){
    console.log(searchChange, search);
    
    return(
        <div className='nav'>

            <Link to='/'>Home</Link>
            <Link to='/cities'>Cities</Link>
            <Link to='/trails'>Trails</Link>
            <Search fxns={{searchChange}} search={search} />
            {/* <ModelList model={'city'} search={search} /> */}
        </div>
    )
}