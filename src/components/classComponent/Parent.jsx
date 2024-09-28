import React, { Component } from 'react'
import Child from './Child';

class Parent extends Component {

  greetParent = (msg)=>{
    console.log('parent called ');
    console.log('child msg is :  '+ msg);
  }

  render() {
    return (
      <div>
        <h1>parent componen</h1>
        <Child call={this.greetParent} />
        click slowly it is enough u dont need to press it harder little bit of push is enough
      </div>
    );
  }
}

export default Parent

