import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DynamicBezier from './comps/dynamicbezier'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
        <DynamicBezier viewBoxWidth={1500} viewBoxHeight={500} />
      </div>
    )
  }
}

export default App
