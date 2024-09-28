import React, { Component } from 'react'

class ConRendering extends Component {

constructor(props){
  super(props)
  this.state={
    isLoggedIn:true
  }
}

handleLogin = ()=>{
  // console.log("logged in")
  this.setState((prev)=>({
      isLoggedIn:!prev.isLoggedIn
  }))
}




// this is what you have done to me and then



  render() {
    const {isLoggedIn} = this.state;
    // let msg ;
    return (
      <div>
          {isLoggedIn && ( <h1> hello  user </h1>)}
      </div>
    )




    // return(
    //   <div>
    //     <h1>{msg}</h1>
    //   </div>
    // )

  //  if (isLoggedIn){
  //   return(
  //     <div>
  //       <h1>hello diwakar</h1>

  //     </div>
  //   )
  //  }else{
  //   return (
  //     <div>
  //       <h1>hello guest</h1>
  //     </div>
  //   );

  //  }
    // return (
    //   <div>
    //     <h1>conditional rendering </h1>
    //     {/* --------- */}
    //     <br />
    //     <br />
    //     <br />
    //     <br />
    //      {

    //      }
    //     <h1>hello diwakar </h1>
    //     <h1>hello guest</h1>
    //   </div>
    // );
  }
}

export default ConRendering

