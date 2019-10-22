import React, {useState} from 'react';
// import {Link} from 'react-dom';
import Search from './Search';
import ModelList from './ModelList';

export default function Nav(){
    let [search, setSearch] = useState('');
    const searchChange = (e) => {
        let searchValue = e.target.value;
        setSearch(searchValue)
    }
    return(
        <div className='nav'>

            {/* <Link to='/'>MP3</Link> */}
            {/* <Link to='/cities'><ModelList model={'city'} /></Link> */}
            {/* <Link to='/trails'><ModelList model={'trail'} /></Link> */}
            <Search fxns={{searchChange}} search={search} />
            <ModelList model={'city'} search={search} />
        </div>
    )
}