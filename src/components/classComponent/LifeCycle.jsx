import React, { Component } from 'react'

class LifeCycle extends Component {

   state = {
    count : 0
   }
/*
    -- life cycle methods
     3 life cycle methods
      - did, did , will


    >>> mountingv-- instance of a component is created and mounted and inserted into the DOM
        --- constructor is created , render method called , comp did mount

    >>> updating --  change of state and rerenders the component when props or state changes
    >>> unmounting -- unmounts or component removed from the DOM
    >>> error boundaries
*/
  componentDidMount(){
    console.log("component did mounted into the dom")
  }

  componentDidUpdate(){
    console.log("component did update and invoked re-rendered ")
  }

  componentWillUnmount(){
    console.log("component did unmounts from dom")
  }


  handleCount =  ()=>{
    this.setState((prev)=>({
      count:prev.count+1
    }))
    // console.log("from handleCount function")
  }



  render() {
    const{count} = this.state
    return (
      <div>
        <h1>life cycle methods</h1>
        <button onClick={this.handleCount}>count : {count}</button>

      </div>
    )
  }
}

export default LifeCycle

