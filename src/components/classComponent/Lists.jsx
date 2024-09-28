import React, { Component } from 'react'

import "./styles.css"
import styles from  "../style.module.css"

const users = [
  { id:1, name: 'John', age: 23 },
  { id:2, name: 'wick', age: 21},
  { id:3, name: 'Jane', age: 25 },];

class Lists extends Component {

  state={
    changeColor :false
  }

  toggle = ()=>{

    this.setState((prev)=>({
      changeColor:!prev.changeColor
    }))

  }

  render() {
    const {changeColor} = this.state;
    const heading = {
      color:"blue"
    }
    return (
      <div>
        <h1>list of elements</h1>
        <br />
        <br />
        <br />
        {users.map((user, index) => (
          <div key={user.name} className="cont">
            <h2 className={changeColor ?'list-heading':null}>
              username : {user.name}
            </h2>
            <span className={ `${changeColor? 'list-span' : null}`}>age : {user.age}</span>
            <br />
            <br />
            <h3 className={styles.color}>heading</h3>
          </div>
        ))}
        <button onClick={this.toggle}>Toggle color</button>
      </div>
    );
  }
}

export default Lists

