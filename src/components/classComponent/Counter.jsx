import React, { Component } from 'react'
import HOC from './HOC'

class Counter extends Component {
  render() {
    const { count, handleCount, name } = this.props;
    console.log(name)
    return (
      <div>
        <h1>count : {count}</h1>
        <button onClick={handleCount}>{name} count</button>
      </div>
    );
  }
}

export default HOC(Counter, 10)
