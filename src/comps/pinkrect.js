import React from 'react'

const PinkRect = ({x, y, width, height}) => (
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <rect x={x} y={y} width={width} height={height}
      fill='hotpink' />
  </svg>
)

export default PinkRect

