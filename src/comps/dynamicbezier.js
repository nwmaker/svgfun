import React from 'react'
//import styled from 'styled-components'
import './dynamicbezier.css'

class DynamicBezier extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      // quad bezier curve
      startPoint: {x: 10, y: 10},
      controlPoint: {x: 190, y: 100},
      endPoint: {x: 10, y: 190},
      // which point is dragged. By default, no point.
      draggingPointId: null,
    }
  }

  handleMouseDown(pointId) {
    this.setState({ draggingPointId: pointId })
  }

  handleMouseUp() {
    this.setState({ draggingPointId: null })
  }

  handleMouseMove({ clientX, clientY }) {
    const { viewBoxWidth, viewBoxHeight } = this.props
    const { draggingPointId } = this.state

    // if no point dragged, do nothing!
    if (!draggingPointId) {
      return
    }

    // capture a reference to the SVG we are drawing,
    // and store it on the instance with this.node
    // 
    const svgRect = this.node.getBoundingClientRect()

    const svgX = clientX - svgRect.left
    const svgY = clientY - svgRect.top

    const viewBoxX = svgX * viewBoxWidth / svgRect.width
    const viewBoxY = svgY * viewBoxHeight / svgRect.height

    this.setState({
      [draggingPointId]: {x: viewBoxX, y: viewBoxY},
    }) 
  }

  render() {
    const { viewBoxWidth, viewBoxHeight } = this.props
    const { startPoint, controlPoint, endPoint } = this.state

    const instructions = `
      M ${startPoint.x},${startPoint.y}
      Q ${controlPoint.x},${controlPoint.y} ${endPoint.x},${endPoint.y}
    `
    return (
      <svg
        ref={node => (this.node = node)}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        onMouseMove={ev => this.handleMouseMove(ev)}
        onMouseUp={() => this.handleMouseUp()}
        onMouseLeave={() => this.handleMouseUp()}
        style={{ overflow: 'visible' }} >
        <ConnectingLine from={startPoint} to={controlPoint} />
        <ConnectingLine from={controlPoint} to={endPoint} />
        <Curve instructions={instructions} />
        <LargeHandle coordinates={startPoint}
          onMouseDown={() => this.handleMouseDown('startPoint')} />
        <LargeHandle coordinates={endPoint}
          onMouseDown={() => this.handleMouseDown('endPoint')} />
        <SmallHandle coordinates={controlPoint}
          onMouseDown={() => this.handleMouseDown('controlPoint')} />
      </svg>
    )
  }

}

/*
const ControlLine = styled.line`
  stroke: 'rgb(200, 200, 200);
  stroke-dasharray: 5, 5;
  stroke-width: 2;
`
*/

const ConnectingLine = ({ from, to }) => (
  <line className='DotLine' 
    x1={from.x} y1={from.y}
    x2={to.x} y2={to.y}
    stroke='rgb(200, 200, 200)'
    stroke-dasharray="5,5"
    strokeWidth={2}
    />
)

/*
const ConnectingLine = ({ from, to }) => (
  <ControlLine x1={from.x} y1={from.y}
    x2={to.x} y2={to.y} />
)
*/

const Curve = ({ instructions }) => (
  <path
    d={instructions}
    fill="none"
    stroke="rgb(213, 0, 249)"
    strokeWidth={5}
  />
)

const LargeHandle = ({ coordinates, onMouseDown }) => (
  <ellipse
    cx={coordinates.x}
    cy={coordinates.y}
    rx={15}
    ry={15}
    fill="rgb(244, 0, 137)"
    onMouseDown={onMouseDown}
    style={{ cursor: '-webkit-grab' }}
  />
)

const SmallHandle = ({ coordinates, onMouseDown }) => (
  <ellipse
    cx={coordinates.x}
    cy={coordinates.y}
    rx={8}
    ry={8}
    fill="rgb(255, 255, 255)"
    stroke="rgb(244, 0, 137)"
    strokeWidth={2}
    onMouseDown={onMouseDown}
    style={{ cursor: '-webkit-grab' }}
  />
)

export default DynamicBezier

