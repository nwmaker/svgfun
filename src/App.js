import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import DynamicBezier from './comps/dynamicbezier'
import MoveRect from './interactive/moverect'
import MoveCubic from './interactive/movecubic'

import SVGPath from './pathdata/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Manipulate SVG within React</h1>
        </header>
        <p className="App-intro">
        </p>
        <SVGPath />
        <DynamicBezier viewBoxWidth={1500} viewBoxHeight={500} />
        <MoveRect />
        <MoveCubic />
      </div>
    )
  }
}

export default App
