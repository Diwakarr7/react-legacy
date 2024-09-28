import React, { Component } from 'react';
import { UserConsumer } from './UserContext';

class ComponentC extends Component {
  render() {
    return (
      <>
        <h1>component c </h1>
        <UserConsumer>
          {(username) => {
            return <h1>{username}</h1>;
          }}
        </UserConsumer>
      </>
    );
  }
}

export default ComponentC;
