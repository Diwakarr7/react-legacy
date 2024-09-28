import React, { Component } from 'react'
import HOC from "./HOC"
 class HoverCounter extends Component {
   render() {
     const { count, handleCount } = this.props;
     return (
       <div>
         {/* <h1 >: {} </h1> */}
         <h1 onMouseOver={handleCount}> hovered {count} times</h1>
       </div>
     );
   }
 }

export default HOC(HoverCounter,5)
