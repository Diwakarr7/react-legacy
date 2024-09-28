import React, { Component } from 'react'

class Message extends Component {
  // state={
  //    name:"hello"
  // }
  constructor(props) {
    super(props);
    this.state = {
      name:0
    }
    // this.handleClick =  this.handleClick.bind(this)
  }


  handleClick= ()=>{
    const{name }=  this.state
  //  this.state.name = this.state.name+1
    // this.setState({
    //   name:name+1
    // })

    this.setState((prev)=>({
      name:prev.name+1
    }))
    console.log(`from handleClick funcion  ${name}`)
  }

//  set state accepts the object and a  callback function for prev state

   handleFive = ()=>{
    this.handleClick();
    this.handleClick();
    this.handleClick();
    this.handleClick();
    this.handleClick();
   }

   
  render() {

    const { name} = this.state;
    console.log(name+  " "+  "from the render method")

    return (
      <div>
        {name} world! !<button onClick={this.handleClick}>change msg </button>
        <button onClick={this.handleFive}>click five times </button>
      </div>
    );
  }
}

export default Message

