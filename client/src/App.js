// react imports
import React, {useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// general components
import ModelItemsList from './components/ModelList';
import Nav from './components/Nav';
// import Map from './components/Map';

// state components
import State from './components/state/State'

// trail components
import CreateTrail from './components/trail/CreateTrail';
import Trail from './components/trail/Trail';
import EditTrail from './components/trail/EditTrail';

// user components
import NewUser from './components/user/NewUser';
import User from './components/user/User';
import EditUser from './components/user/EditUser';

// styling
import './App.css';


function App() {
  let [search, setSearch] = useState('');
    const searchChange = (e) => {
      let searchValue = e.target.value;
      setSearch(searchValue)
    }
  return (
    <BrowserRouter>
      <div className="App">
        <Nav  searchChange={searchChange} search={search}/>
        <Switch>
          <Route exact path='/'></Route>
          <Route exact path='/states'><ModelItemsList model={'state'} search={search} /></Route>
          <Route exact path='/states/:id'><State /></Route>
          <Route exact path='/trails'><ModelItemsList model={'trail'} search={search} /></Route>
          <Route exact path='/trails/:id'><Trail /></Route>
          <Route exact path='/trails/new'><CreateTrail /></Route>
          <Route exact path='/trails/:id/edit'><EditTrail /></Route>
          <Route exact path='/user'><User /></Route>
          <Route exact path='/user/new'><NewUser /></Route>
          <Route exact path='/user/edit'><EditUser /></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
