import React, { Component } from 'react'

class ClickCounter extends Component {


  render() {
    const {count, incrementCounter }=  this.props
    return (
      <div>
            <button onClick={incrementCounter}>clicked {count} times</button>
      </div>
    )
  }
}

export default ClickCounter
