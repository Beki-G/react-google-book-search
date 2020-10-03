import React from 'react';
import Search from './pages/Search'
import Saved from './pages/Saved';
import './App.css';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    // <div>
    //   <Search/>
    // </div>
    <Switch>
      <Route exact path="/" component={ Search } />
      <Route path="/saved" component={ Saved } />
    </Switch>
  );
}

export default App;
