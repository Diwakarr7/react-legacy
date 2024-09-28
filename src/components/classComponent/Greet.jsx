import React, { Component } from 'react'
class Greet extends Component {

  // const a = "something"
  constructor(props){
    super(props)
    this.state={
      age:23
    }
  }
  // state={
  //   name:{name:"hehe", age:23},
  //   age:23
  // }
  // name:"hello world and then how "
  render() {
    const {age} = this.state
    const{name, children}= this.props
    // const a = "something"
    // const a = "something"
    // name="hello world"
  //  const {name} =  this.state
    return (
      <div>
          <h1>hello {name}</h1>
          {/* <p>{children}</p> */}
          {children}
          <p>age : {age+1}</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, qui?</p>
        
      </div>
    )
  }
}

export default Greet

