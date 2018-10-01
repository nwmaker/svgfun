import React from 'react'

import lines from 'svg-patterns/p/lines'
import stringify from 'virtual-dom-stringify'

const pattern = lines({
  stroke: '#9c92ac',
  background: '#dfdbe5',
  orientations: [45]
})

const LinePattern = () =>
  <svg xmlns="http://www.w3.org/2000/svg">
    <defs dangerouslySetInnerHTML={{ __html: stringify(pattern) }} />
    <rect
      width="500"
      height="500"
      style={{ fill: pattern.url() }}
    />
  </svg>

export default LinePattern

