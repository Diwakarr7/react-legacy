import React, { Component } from 'react'
import FrInput from './FrInput';

/*
crearte ref , ref=created ref , access
*/


 class Refs extends Component {

    constructor(props) {
      super(props)
    this.inputRef = React.createRef()
    }
    handleClick = ()=>{
      this.inputRef.current.focus()
    }

  render() {
      // const{name} = this.state
    return (
      <div>
        {/* <h1>Refs </h1> */}
        <label>
          {' '}
          username:
          {/* <input type="text" ref={this.inputRef}  /> */}
        </label>
        <FrInput ref={this.inputRef}/>
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default Refs
