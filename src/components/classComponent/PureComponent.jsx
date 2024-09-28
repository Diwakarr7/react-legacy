import React, { Component } from 'react'
import PureComponentChild from './PureComponentChild'
import RegComp from './RegComp';
import Memo from '../functionalComponent/Memo';

class PureComponent extends Component {

  /*
      - pure component wont rerender the when there is not change in props and state
      - optimizes the re renders from occuring
      -  normal componet re renders when parent re renders

  */


  constructor(props){
    super(props);
    this.state = {
      count: 0
    }
  }

   componentDidMount(){
    setInterval(()=>{
        this.setState({count:0})
    },2000)
   }


  render() {

    const{ count} = this.state
    console.log("normal component")
    return (
      <div>
        <h1>pure component</h1>
        {/* <button onClick={this.handleCount}>count : {count}</button> */}
        {/* <RegComp count= {count}/> */}
        {/* <PureComponentChild count={count}/> */}
          <Memo count={count}/>

      </div>
    );
  }
}

export default PureComponent
