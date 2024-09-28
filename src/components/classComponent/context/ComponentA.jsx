import React, { Component } from 'react'
import ComponentB from './ComponentB'

 class ComponentA extends Component {
  render() {
    return (
      <div>
        <h1>component A</h1>
        {/* <p>{this.props.name}</p> */}
        <ComponentB />
      </div>
    );
  }
}

export default ComponentA
