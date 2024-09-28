import {Component} from 'react';

/*
 share common reusable code with differenct components
HOC
 accepts component as argument and returns a enhanced component
 and return existing props too
*/
const updatedComponent = (WrappedComponent, increamentCount)=>{
  class NewComponent extends Component{
    constructor(props) {
      super(props)
      this.state = {
          count : 0
      }
    }
    handleCount = () => {
      this.setState((prevState) => ({
        count: prevState.count + increamentCount,
      }));
    }

    render(){
      return (
        <WrappedComponent
          count={this.state.count}
          handleCount={this.handleCount}
          {...this.props}
        />
      );
    }


  }
  return NewComponent;

}




// const updatedComponent = (OriginalComponent)=>{
//     class NewComponent extends Component {
//       constructor(props) {
//         super(props);
//         this.state = {
//           count: 0,
//         };
//       }
//       handleCount = () => {
//         this.setState((prevState) => ({
//           count: prevState.count + 1,
//         }));
//       };
//       render() {
//         return <OriginalComponent count={this.state.count} handleCount={this.handleCount} />;
//       }
//     }
//     return NewComponent;
// }

export default updatedComponent;
