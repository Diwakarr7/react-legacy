import React, { Component } from 'react'

class RegComp extends Component {
  render() {
    const {count} = this.props
    console.log("reg component")
    return (
      <div>
        <h1>reg comp {}</h1>
      </div>
    )
  }
}

export default RegComp
