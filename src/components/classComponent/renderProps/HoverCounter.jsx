import React, { Component } from 'react';

class HoverCounter extends Component {

  render() {
    const { count, incrementCounter } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCounter}>clicked {count} times</h1>
      </div>
    );
  }
}

export default HoverCounter;
