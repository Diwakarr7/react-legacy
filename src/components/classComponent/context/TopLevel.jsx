import React, { Component } from 'react'
import ComponentA from './ComponentA';


 class TopLevel extends Component {
   render() {
     return (
       <div>
         <h1>top level</h1>
         <ComponentA/>
       </div>
     );
   }
 }

export default TopLevel;
