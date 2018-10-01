import React from 'react'

const rectangle = (
  <rect
    x={40} y={15}
    width={30} height={65}
    fill="hotpink"
  />
)

const circle = (
  <ellipse
    cx={30} cy={60}
    rx={20} ry={20}
    fill="lightsalmon"
  />
)

const triangle = (
  <polygon
    points="15,80 30,55 45,80"
    fill="turquoise"
  />
)


const SVGShapes = () => (
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"
    style={{ background: '#333' }}
    viewBox='0 0 80 80' >
    {rectangle}
    {circle}
    {triangle}
  </svg>
)

export default SVGShapes

