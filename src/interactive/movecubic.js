import React from 'react'

class MoveCubic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      points: [
        {x: 30, y: 900},
        {x: 30, y: 30},
        {x: 900, y: 30},
        {x: 900, y: 900},
      ]
    }
  }
  render() {
    const { points } = this.state

    return (
      <svg viewBox='0 0 1000 1000'
        ref = {(svg) => this.svg = svg}>
        <path
          d={`
            M ${points[0].x} ${points[0].y}
            C ${points[1].x} ${points[1].y},
              ${points[2].x} ${points[2].y},
              ${points[3].x} ${points[3].y}
          `}
          fill='transparent'
          stroke='blue'
          strokeWidth='3'
        />
        <path
          d={`
            M ${points[0].x} ${points[0].y}
            L ${points[1].x} ${points[1].y},
            M ${points[2].x} ${points[2].y},
            L ${points[3].x} ${points[3].y}
          `}
          fill='transparent'
          stroke='gray'
          stroke-dasharray='5,5'
          strokeWidth='2'
        />
        {
          points.map((point, i) => (
            <g transform="translate(-15, -15)">
              <rect
                x={point.x}
                y={point.y}
                key={i}
                width="30"
                height="30"
                onMouseDown={(e) => this.startDrag(e, i)}
              />
            </g>
          ))
        }
      </svg>
    )
  }
  
  startDrag = (event, index) => {
    event.preventDefault()
    
    const mousemove = (event) => {
      event.preventDefault()

      let cursorPoint = this.svg.createSVGPoint()
      cursorPoint.x = event.clientX
      cursorPoint.y = event.clientY
      cursorPoint = cursorPoint.matrixTransform(this.svg.getScreenCTM().inverse())
      this.setState({
        points: this.state.points.map(
          (p, i) => (index === i ? {
            x: Math.max(Math.min(cursorPoint.x, 1000), 0),
            y: Math.max(Math.min(cursorPoint.y, 1000), 0)
          } : p))
      })
    }
    
    const mouseup = (event) => {
      document.removeEventListener("mousemove", mousemove)
      document.removeEventListener("mouseup", mouseup)
    }
    
    document.addEventListener("mousemove", mousemove)
    document.addEventListener("mouseup", mouseup)
  }
}

export default MoveCubic
