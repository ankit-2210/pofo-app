import React, { Component } from 'react'
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import { Link } from 'react-router-dom'

import { Box } from '@material-ui/core';


class App extends Component {
  render() {
    return (
      <div>
        {/* <Switch> */}
        {/* <Route exact path={"/"} component={Home}></Route> */}
        {/* </Switch> */}
        <Home />
      </div>
    );
  }
}

export default App