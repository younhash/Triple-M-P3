import React from 'react';
import {Link} from 'react-router-dom';
import Search from './Search';
import BurgerMenu from './BurgerMenu';

export default function Nav({searchChange, search}){
    // console.log(searchChange, search);

    const clickHandler = () => {

    }

    return(
        <div className='nav'>
            <div className="links">
                <Link to='/'>BikeStar</Link>
                <Link to='/states'>States</Link>
                <Link to='/trails'>Trails</Link>
                {/* <Link to='/user/new' >Create new user!</Link>
                <Link to='/user/edit' >Edit user</Link> */}
                {/* <Link to=  >Bur Menu</Link> */}
                {/* <BurgerMenu /> */}
                <div className="user-menu" onClick={clickHandler}>
                    Users &#9776;
                    {<BurgerMenu />}
                </div>
            </div>
            <img src='/crop-david-marcu-unsplash.jpg' alt='bike riding in the mountain' width="100%" height=""/>
            <Search fxns={{searchChange}} search={search} />
            {/* <ModelList model={'state'} search={search} /> */}
        </div>
    )
}