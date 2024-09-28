import React, { Component, PureComponent } from 'react'

class PureComponentChild extends PureComponent {


  render() {
    const {count } = this.props
    console.log("pure component")
    return (
      <div>
          <h1>pure component child component </h1>
          <span>child prop {count}</span>
      </div>
    )
  }
}

export default PureComponentChild
