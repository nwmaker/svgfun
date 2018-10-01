import React from 'react'

const OrangeCircle = ({cx, cy, rx, ry}) => (
  <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx={cx} cy={cy} rx={rx} ry={ry}
      fill='lightsalmon' />
  </svg>
)

export default OrangeCircle

