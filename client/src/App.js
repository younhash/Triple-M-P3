import React from 'react';
// import {BrowserRouter} from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import City from './components/city/City';
import Map from './components/Map';
import CreateTrail from './components/trail/CreateTrail';
import { typeAlias } from '@babel/types';


function App() {
  const returnSearch = (searchInfo) => {
    
  }
  return (
    // <BrowserRouter>
      <div className="App">
        <img src='/crop-david-marcu-unsplash.jpg' alt='bike riding in the mountain' width="100%" height=""/>
        <Nav  fxns={{returnSearch}}/>
      </div>
    // </BrowserRouter>
  );
}

export default App;
