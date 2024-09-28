import React, { Component } from 'react'
import ComponentC from './ComponentC';
import { UserConsumer } from './UserContext';
class ComponentB extends Component {
  render() {
    return (
      <div>
        <h1>component B</h1>
        {/* <p>{this.props.name}</p> */}
        <UserConsumer>
          {
            (username)=>{
              return <h2>value is consumed from component B --- {username}</h2>
            }
          }
        </UserConsumer>
        <ComponentC />
      </div>
    );
  }
}

export default ComponentB
