import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';

export default function Nav({searchChange, search}){
    // console.log(searchChange, search);
    
    return(
        <div className='nav'>
            <img src='/crop-david-marcu-unsplash.jpg' alt='bike riding in the mountain' width="100%" height=""/>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/states'>States</Link>
                <Link to='/trails'>Trails</Link>
            </div> 
            <Search fxns={{searchChange}} search={search} />
            {/* <ModelList model={'state'} search={search} /> */}
        </div>
    )
}