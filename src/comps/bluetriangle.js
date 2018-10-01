import React from 'react'

const BlueTriangle = ({points}) => (
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
    <polygon 
      points={points}
      fill='turquoise' />
  </svg>
)

export default BlueTriangle

