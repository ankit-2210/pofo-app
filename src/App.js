import React from 'react'
import './App.css';
import Home from './components/Home';
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}


export default App