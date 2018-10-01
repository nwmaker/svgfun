import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BasicSVG from './comps/basicsvg'
import ImgSVG from './comps/imgsvg'
import LinePattern from './comps/pattern1'

import RectProps from './comps/rectprops'
import RectRefs from './comps/rectrefs'

import PinkRect from './comps/pinkrect'
import OrangeCircle from './comps/orangecircle'
import BlueTriangle from './comps/bluetriangle'
import SVGShapes from './comps/svgshapes'
import PathRect from './comps/pathrect'
import QuadBezier from './comps/quadbezier'
import CubicBezier from './comps/cubicbezier'
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
        <BasicSVG />
        <ImgSVG />
        <LinePattern />
        <RectProps width='60' height='30' />
        <RectRefs />
        <PinkRect x='40' y='15' width='30' height='65' />
        <OrangeCircle cx='50' cy='40' rx='40' ry='40' />
        <BlueTriangle points='15,80 30,55 45,80' />
        <SVGShapes />
        <PathRect />
        <QuadBezier />
        <CubicBezier />
      </div>
    )
  }
}

export default App
