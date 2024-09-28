import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  incrementCounter = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };
  render() {
    const{count, incrementCounter} = this.props
    return (
      <div>
        <h1>counter : {}</h1>
      </div>
    );
  }
}

export default Counter
