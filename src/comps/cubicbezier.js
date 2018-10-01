import React from 'react'

const startPoint = [25, 25]

const path = (
  <path
    d={`
      M ${startPoint}
      C 100,50 25,75 25,100
      C 25,125 300,150 25,175
    `}
    fill='none'
    stroke='hotpink'
    strokeWidth={5}
  />
)

const CubicBezier = () => (
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"
    style={{ maxHeight: 400 }}
    viewBox='0 0 200 200' >
    {path}
  </svg>
)

export default CubicBezier

