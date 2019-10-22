import React from 'react';
// import {BrowserRouter} from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import City from './components/city/City';
import Map from './components/Map';
import CreateTrail from './components/trail/CreateTrail';

const trails = [
  {
      "name": "Betasso Preserve",
      "summary": "A solid ride close to Boulder that is often ridden from town.",
      "difficulty": "greenBlue",
      "city": "Boulder", 
      "state": "Colorado",
      "url": "https://www.mtbproject.com/trail/46286/betasso-preserve",
      "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7002944_sqsmall_1554403854.jpg",
      "imgSmall": "https://cdn-files.apstatic.com/mtb/7002944_small_1554403854.jpg",
      "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7002944_smallMed_1554403854.jpg",
      "imgMedium": "https://cdn-files.apstatic.com/mtb/7002944_medium_1554403854.jpg",
      "length": 7.4,
      "longitude": -105.3422,
      "latitude": 40.0155
      },
      {
          "name": "Centennial Cone",
          "summary": "One of the better beginner/intermediate rides in the front range.",
          "difficulty": "blue",
          "city": "Idaho Springs", 
          "state": "Colorado",
          "url": "https://www.mtbproject.com/trail/31804/centennial-cone",
          "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7029901_sqsmall_1555016067.jpg",
          "imgSmall": "https://cdn-files.apstatic.com/mtb/7029901_small_1555016067.jpg",
          "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7029901_smallMed_1555016067.jpg",
          "imgMedium": "https://cdn-files.apstatic.com/mtb/7029901_medium_1555016067.jpg",
          "length": 17.2,
          "longitude": -105.371,
          "latitude": 39.7372,
      },
      {
          "name": "Betasso Preserve",
          "summary": "A solid ride close to Boulder that is often ridden from town.",
          "difficulty": "greenBlue",
          "location": "Boulder, Colorado",
          "url": "https://www.mtbproject.com/trail/46286/betasso-preserve",
          "imgSqSmall": "https://cdn-files.apstatic.com/mtb/7002944_sqsmall_1554403854.jpg",
          "imgSmall": "https://cdn-files.apstatic.com/mtb/7002944_small_1554403854.jpg",
          "imgSmallMed": "https://cdn-files.apstatic.com/mtb/7002944_smallMed_1554403854.jpg",
          "imgMedium": "https://cdn-files.apstatic.com/mtb/7002944_medium_1554403854.jpg",
          "length": 7.4,
          "longitude": -105.3422,
          "latitude": 40.0155
      }
  ]

function App() {
  const returnSearch = (searchInfo) => {
    
  }
  return (
    // <BrowserRouter>
      <div className="App">
        <img src='/crop-david-marcu-unsplash.jpg' alt='bike riding in the mountain' width="100%" height=""/>
        <Nav  fxns={{returnSearch}}/>
        {trails.map( (trail) => {
         return <p>{trail.name}</p>
        })}
      </div>
    // </BrowserRouter>
  );
}

export default App;
