import React from 'react';
// import {BrowserRouter} from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import City from './components/city/City';
import Map from './components/Map';
import CreateTrail from './components/trail/CreateTrail';

function App() {
  
  return (
    // <BrowserRouter>
      <div className="App">
        <Nav />
      </div>
    // </BrowserRouter>
  );
}

export default App;
