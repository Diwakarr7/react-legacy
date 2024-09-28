import React, { Component } from 'react'

class User extends Component {
  render() {
    const{render}= this.props
    return (
      <div>
          <h1>{render(true)}</h1>
      </div>
    )
  }
}

export default User
