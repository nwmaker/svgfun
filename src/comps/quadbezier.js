import React from 'react'

// quad bezier curve has one control point
const startPoint = [25, 25]
const controlPoint = [300, 175]
const endPoint = [25, 325]

const path = (
  <path
    d={`
      M ${startPoint}
      Q ${controlPoint} ${endPoint}
    `}
    fill='none'
    stroke='hotpink'
    strokeWidth={3}
  />
)

const QuadBezier = () => (
  <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"
    style={{ maxHeight: 400 }}
    viewBox='0 0 200 350' >
    {path}
  </svg>
)

export default QuadBezier

