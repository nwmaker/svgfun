import React from 'react'

//
// use refs when you need to modify a child outside of typical react dataflow
// the child can be an instance of a react component or
// a DOM element
//
// to manage focus, text selection, or media playback
// triggering imperative animations
// integrating with third-party DOM libraries
//

class RectRefs extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
  }

  render() {
    return ( 
      <svg width="400" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect id='rectref' ref={this.myRef} 
          x='10' 
          y='10'
          width='50'
          height='70'
          stroke='#f00'
          strokeWidth='3'
          fill='none'
        />
      </svg>
    )
  }
}

export default RectRefs
