import React from 'react';
// import {Link} from 'react-dom';
import Search from './Search';
export default function Nav({fxns}){
    const {returnSearch} = fxns;
    
    return(
        <div className='nav'>

            {/* <Link to='/'>MP3</Link>
            <Link to='/cities'>Cities</Link>
            <Link to='/trails'>Trails</Link> */}
            <Search fxns={{returnSearch}} />
        </div>
    )
}