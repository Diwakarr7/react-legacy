import React, { Component } from 'react'

class Child extends Component {





  render() {
    const{call} = this.props;
    return (
      <div>
        <h1>child component</h1>
        <button onClick={()=>call("this is child message")}>call parent </button>

      </div>
    )
  }
}

export default Child

