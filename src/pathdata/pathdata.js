import React from 'react'
import './pathdata.css'

export default () => (
  <div className='pathdata-container'>
    <div className='pathdata-path'>
      <svg width='500' height='1400'>
        <defs>
          <g id='cross'>
            <rect x="-5" y="-5" width="10" height="10" fill="none" stroke="#aaa" stroke-width="1px" />
          </g>
          <g id="crossFilled">
	    <rect x="-5" y="-5" width="10" height="10" fill="orange" stroke="#aaa" stroke-width="1px" />
	  </g>
        </defs>
        <g id='grid'></g>
        <g id='curve'></g>
      </svg>
    </div>
    <div className='pathdata-data'>
      <h2>Path</h2>
      <pre className='text'></pre>
      <h2>Data</h2>
      <pre className='data'></pre>
    </div>
  </div>
)
