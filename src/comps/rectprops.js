import React from 'react'

const RectProps = ({width, height}) => 
  <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
    <rect id='rectangle' x='10' y='10'
      width={width}
      height={height}
      stroke='#000'
      strokeWidth='4'
      fill='none'
    />
  </svg>

export default RectProps
