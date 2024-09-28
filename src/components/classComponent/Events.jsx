import React, { Component } from 'react'

class Events extends Component {

  constructor(){
    super()
    // this.clickHandle = this.clickHandle.bind(this);

  }

  clickHandle = ()=>{
    console.log(this);
    // this.props.onButtonClick('Hello from parent');
  }

  render() {
    return (
      <div>
        <h1>Events </h1>
        <br />
        <br />
        <br />
        <button onClick={this.clickHandle}>fire event</button>;{' '}
      </div>
    );
  }
}

export default Events
